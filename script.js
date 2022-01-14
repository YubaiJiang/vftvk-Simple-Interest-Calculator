function compute()
{
    let p = document.getElementById("principal").value;
    let r = document.getElementById("rate").value;
    let y = document.getElementById("years").value;

    let interests = p * r / 100 * y;

    let currentYear = parseInt(new Date().getFullYear());
    let targetYear = currentYear + parseInt(y);

    let output = document.getElementById("results");

    while(output.firstChild)
    {
        output.removeChild(output.lastChild)
    }

    let line1 = "If you deposit " + "<mark>" + p + "</mark>,";
    let line2 = "at an interest rate of " + "<mark>" + r + "</mark>" + ".";
    let line3 = "You will receive and amount of "  + "<mark>" + interests + "</mark>" + ",";
    let line4 = "in the year " + "<mark>" + targetYear + "</mark>";
    let lines = [line1, line2, line3, line4];

    for (let i = 0; i < 4; i++)
    {
        let p = document.createElement("output");
        p.innerHTML = lines[i];
        output.appendChild(p);
        if (i != 3)
        {
            output.appendChild(document.createElement("br"));
        }
    }

    
}

function refreshRate()
{
    let r = document.getElementById("rate").value;
    let t = document.getElementById("rateText");
    t.value = r + "%";
}

function addYears()
{
    let n = document.getElementById("years");
    for (let i = 1; i <= 10; i++)
    {
        let o = document.createElement("option");
        o.value = i;
        o.text = i;
        n.add(o);
    }
}

function initialiseForm()
{
    refreshRate();
    addYears();
}