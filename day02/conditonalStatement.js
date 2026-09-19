function launchBrowser(browserName)
{
    if(browserName === "Chrome")
    {
        console.log(browserName);
    }
    else
    {
        console.log("Browser not identified");
    }
}
function runTest(testType)
{
switch (testType){
    case "Smoke":
        console.log("Running Smoke Test");
        break;
    case "Sanity":
        console.log("Running Sanity Test");
        break;
    case "Regression":
        console.log("Running REgreession Test");
        break;
    default:
        console.log("Invalid Input");
        break;
}
}   
launchBrowser("Chrome")
runTest("Smoke")