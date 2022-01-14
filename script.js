function compute()
{
    let p = document.getElementById("principal").value;
    let r = document.getElementById("rate").value;
    let y = document.getElementById("years").value;

    let interests = p * r / 100 * y;

    let currentYear = parseInt(new Date().getFullYear());
    let targetYear = currentYear + parseInt(y);

    let output = document.getElementById("results");

    output.value = "If you deposit " + p + ",\n";
    output.value = output.value + "at an interest rate of " + r + ".\n";
    output.value = output.value + "You will receive and amount of " + interests + ",\n";
    output.value = output.value + "in the year " + targetYear;

    
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