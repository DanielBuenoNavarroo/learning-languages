import requests
from bs4 import BeautifulSoup
import json

URL = "https://vocabden.com/es/vocabulario-aleman-a1"

def scrape_german_nouns(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")

    results = []

    # Buscar la sección "sustantivos"
    section = soup.find("section", id="nouns")
    if not section:
        print("No se encontró la sección 'nouns'")
        return results

    table = section.find("table")
    if not table:
        print("No se encontró la tabla dentro de 'nouns'")
        return results

    rows = table.find_all("tr")

    count = 0

    for row in rows:
        cols = row.find_all("td")
        if len(cols) < 4:
            continue
        
        count += 1

        # 1) Artículo
        article = cols[0].get_text(strip=True)

        # 2) Sustantivo
        word_cell = cols[1].find("span", class_="v-wl-term")
        if not word_cell:
            continue

        german_word = word_cell.find("span", lang="de").get_text(strip=True)

        # 3) Plural
        plural = cols[2].get_text(strip=True)

        # 4) Traducción
        trad = cols[3].get_text(strip=True)

        item = {
            "id": count,
            "word": f"{article} {german_word}",
            "plural": f"die {plural}",
            "trans": trad,
            "type": "sustantivo",
            "level": "a1"
        }

        results.append(item)

    return results


# Ejecutar scraping
data = scrape_german_nouns(URL)

# Guardar en JSON
with open("sustantivos.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Scraping completado. Archivo sustantivos.json generado.")
