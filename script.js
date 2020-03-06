// Scraping https://www.postgresql.org/docs/8.2/errcodes-appendix.html

classesByCode = {}, obj = {}

document.querySelector('table.CALSTABLE tbody').querySelectorAll('tr').forEach(row => {
  let cells = row.querySelectorAll('td')
  
  if (cells.length === 1) {
    let cellText = cells[0].textContent
    let [classCode, classTitle] = cellText.split(' —\n')
    classCode = classCode.split(' ')[1]
    classesByCode[classCode] = {
      code: classCode,
      title: classTitle.trim()
    }
  } else {
    let [codeCell, meaningCell, constantCell] = cells
    
    let code = codeCell.textContent
    
    let thisClass = classesByCode[code.slice(0, 2)]
    
    obj[code] = {
      constant: constantCell.textContent,
      meaning: meaningCell.textContent,
      class: thisClass
    }
  }
})

console.log(obj)

copy(obj)
