let inputTags = document.getElementsByTagName('input');
let inputArray = Array.from(inputTags),
    utmeScore,
    postUtmeScore

let button = document.querySelector('button')
button.addEventListener('click', () => {

    // Validates utme score
    utmeScore = inputArray[5].valueAsNumber;
    let isUtmeValid = null
    if (!utmeScore) {
        showError({
            type: "utme",
            msg: "Your UTME score is not inputed or is invalid"
        })
    } else if (utmeScore < 0 || utmeScore > 400) {
        showError({
            type: "utme",
            msg: "Your UTME score should be between 0 and 400"
        })
    } else {
        isUtmeValid = true;
    }

    // Validates Post UTME score
    postUtmeScore = inputArray[6].valueAsNumber;
    let isPostUtmeValid = null;
    if (!postUtmeScore) {
        showError({
            type: "postUtme",
            msg: "Your Post UTME score is not inputed or is invalid"
        })
    } else if (postUtmeScore < 0 || postUtmeScore > 30) {
        showError({
            type: "postUtme",
            msg: "Your Post UTME score should be between 0 and 30"
        })
    } else {
        isPostUtmeValid = true;
    }

    if (isPostUtmeValid && isUtmeValid) {
        showResult()
    }
})



const showError = ({ type, msg }) => {
    console.log(type, msg);
}

const showResult = () => {
    let gradeMap = {
            "A1": 4.0,
            "B2": 3.6,
            "B3": 3.2,
            "C4": 2.8,
            "C5": 2.4,
            "C6": 2.0
        },
        oLevelAgg,
        utmeAgg,
        postUtmeAgg


    let oLevelGrades = []
    selectArray.forEach(select => {
        if (!select.value) {
            showError({
                type: "OLevel",
                msg: "Please select grades for all five O Level subjects."
            })
            return false
        } else {
            oLevelGrades.push(select.value);
        }

        // Checks that all grades selected are valid and gets oLevel aggregate
        if (oLevelGrades.length === 5) {
            oLevelAgg = oLevelGrades.map(x => gradeMap[x]).reduce((a, b) => {
                return a + b;
            })
        }
    })

    utmeAgg = inputArray[5].valueAsNumber / 8;
    postUtmeAgg = inputArray[6].valueAsNumber;

    totalAggregate = oLevelAgg + utmeAgg + postUtmeAgg;

    displayAggregate(totalAggregate);
}