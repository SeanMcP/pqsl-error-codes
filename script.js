// Scraping https://www.postgresql.org/docs/current/errcodes-appendix.html

(classesByCode = {}), (obj = {});

document
  .querySelector('table[summary="PostgreSQL Error Codes"]')
  .querySelectorAll("tr")
  .forEach(row => {
    let cells = row.querySelectorAll("td");

    if (cells.length) {
      if (cells.length === 1) {
        let cellText = cells[0].textContent;
        let [classCode, classTitle] = cellText.split(" — ");
        classCode = classCode.split(" ")[1];
        classesByCode[classCode] = {
          code: classCode,
          title: classTitle.trim()
        };
      } else {
        let [codeCell, conditionCell] = cells;

        let code = codeCell.textContent;

        let thisClass = classesByCode[code.slice(0, 2)];

        obj[code] = {
          condition: conditionCell.textContent,
          class: thisClass
        };
      }
    }
  });

console.log(obj);

copy(obj);
