fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const date = new Date();
        let day = date.getDay()-1;
        if(day === -1){
            day = 6;
        }
        for(let i = 0; i < 7; i++){
            let span = graphics.appendChild(document.createElement("div"));
            span.classList.add("graphic");
            span.classList.add(data[i].day);
            let amount_info = span.appendChild(document.createElement("div"));
            amount_info.classList.add("amount-info");
            amount_info.style.display = "none";
            amount_info.textContent = "$" + data[i].amount;
            if(i === day){
                span.classList.add("today");
            }
            let height = data[i].amount*100/45;
            span.style.height = height + "px";

            span.onmouseover = () => {
                amount_info.style.display = "flex";
            }
            span.onmouseout = () => {
                amount_info.style.display = "none";
            }
            
        }
    })

