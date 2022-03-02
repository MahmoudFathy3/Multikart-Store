

const HandlerNumber = (element) => {
    let numbers = { 0: '٠', 1: '١', 2: '٢', 3: '٣', 4: '٤', 5: '٥', 6: '٦', 7: '٧', 8: '٨', 9: '٩' };
        if (element.nodeType === 3) {
            let list = element.data.match(/[0-9]/g);
            if (list !== null && list.length !== 0) {
                for (let i = 0; i < list.length; i++)
                element.data = element.data.replace(list[i], numbers[list[i]]);
            }
        }
        for (let j = 0; j < element.childNodes.length; j++) {
          HandlerNumber(element.childNodes[j]);
        }
      }



export  {HandlerNumber};