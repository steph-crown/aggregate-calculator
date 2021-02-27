let stepsToCalculate = `<h3>
        Steps To Calculate Your Unilag Aggregate Score
    </h3>
    <p>
        First note that your O’level result has 20marks. While your POST UTME and JAMB have 30 and 50 marks respectively.
    </p>
    <p>
        The O’level grades have the following points:
    </p>
    <p>A1 = 4.0</p>
    <p>B2 = 3.6</p>
    <p>B3 = 3.2</p>
    <p>C4 = 2.8</p>
    <p>C5 = 2.4</p>
    <p>C6 = 2.0</p>
    <h4>Steps</h4>
    <p>1. Add together the points for the grades of the 5 required subjects for your course of choice</p>
    <p>2. Divide your UTME score by 8</p>
    <p>3. Add the result of step 1 and step 2 to your post utme result. This is your aggregate</p>
`;
let readHere = document.querySelector("#how-to-calculate small");

readHere.addEventListener("click", () => {
    readHere.innerText = (readHere.innerText === "Read Here") ? "Hide" : "Read Here";
    document.querySelector("#how-to-calculate p").innerHTML = (readHere.innerText === "Hide") ?
        stepsToCalculate :
        "Want to know how we calculated this?"
})