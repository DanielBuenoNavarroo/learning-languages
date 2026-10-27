import requests
from bs4 import BeautifulSoup
import json

URL = "https://vocabden.com/es/vocabulario-aleman-a2"

START_ID = 671 + 1  # ← el siguiente ID después de tus sustantivos

def scrape_section(section_id, soup, current_id):
    results = []

    section = soup.find("section", id=section_id)
    if not section:
        print(f"No se encontró la sección '{section_id}'")
        return results, current_id

    table = section.find("table")
    if not table:
        print(f"No se encontró la tabla dentro de '{section_id}'")
        return results, current_id

    rows = table.find_all("tr")

    for row in rows:
        cols = row.find_all("td")

        # Sustantivos tienen 4 columnas
        if section_id == "nouns":
            if len(cols) < 4:
                continue

            article = cols[0].get_text(strip=True)

            word_cell = cols[1].find("span", class_="v-wl-term")
            if not word_cell:
                continue

            german_word = word_cell.find("span", lang="de").get_text(strip=True)

            plural = cols[2].get_text(strip=True)
            trad = cols[3].get_text(strip=True)

            item = {
                "id": current_id,
                "word": f"{article} {german_word}",
                "trans": trad,
                "type": "sustantivo",
                "level": "a2"
            }

            if plural and plural.strip():
                item["plural"] = f"die {plural}"

            results.append(item)
            current_id += 1

        # Verbos, adjetivos, adverbios, otros → 2 columnas
        else:
            if len(cols) < 2:
                continue

            word_cell = cols[0].find("span", class_="v-wl-term")
            if not word_cell:
                continue

            german_word = word_cell.find("span", lang="de").get_text(strip=True)
            trad = cols[1].get_text(strip=True)

            type_map = {
                "verbs": "verbo",
                "adjectives": "adjetivo",
                "adverbs": "adverbio",
                "other": "otro"
            }

            item = {
                "id": current_id,
                "word": german_word,
                "trans": trad,
                "type": type_map.get(section_id, "otro"),
                "level": "a2"
            }

            results.append(item)
            current_id += 1

    return results, current_id


def scrape_german_a2(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")

    all_results = []
    current_id = START_ID

    sections = ["nouns", "verbs", "adjectives", "adverbs", "other"]

    for sec in sections:
        sec_results, current_id = scrape_section(sec, soup, current_id)
        all_results.extend(sec_results)

    return all_results


# Ejecutar scraping
data = scrape_german_a2(URL)

# Guardar en JSON
with open("a2.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Scraping completado. Archivo a2.json generado.")
