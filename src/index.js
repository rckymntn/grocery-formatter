let delimiter = "###";

window.onload = () => {

    // What happens when the sort button is clicked
    let sortButtonElement = document.querySelector("#sortButton");
    // Sanity check
    if (sortButtonElement) {
        sortButtonElement.addEventListener("click", () => {
            let inputText = document.querySelector("#inputTextArea").value;
            // Ensure output textarea is clear
            document.querySelector("#outputTextArea").value = "";
            // Write a grouped list to the output textarea
            document.querySelector("#outputTextArea").value = group(inputText);
        });
    }

    // What happens when the copy button is clicked
    let copyButtonElement = document.querySelector("#copyButton");
    // Sanity check
    if (copyButtonElement) {
        copyButtonElement.addEventListener("click", () => {
            // Copy text in output textarea to clipboard
            navigator.clipboard.writeText(document.querySelector("#outputTextArea").value);
        });
    }

    // What happens when the clear button is clicked
    let clearButtonElement = document.querySelector("#clearButton");
    // Sanity check
    if (clearButtonElement) {
        clearButtonElement.addEventListener("click", () => {
            if (confirm("Are you sure you would like to clear your list?")) {
                // Clear input and output textareas
                document.querySelector("#inputTextArea").value = "";
                document.querySelector("#outputTextArea").value = "";
            }
        });
    }

    // What happens when a new delimiter for groups is selected
    let selectDelimiterElement = document.querySelector("#delimiterSelect");
    // Sanity check
    if (selectDelimiterElement) {
        selectDelimiterElement.addEventListener("change", () => {
            delimiter = selectDelimiterElement.value;
        });
    }
}

group = (text) => {
    let groups = {
        produce: `${delimiter} PRODUCE ${delimiter}`,
        toiletries: `${delimiter} TOILETRIES ${delimiter}`,
        misc: `${delimiter} MISC ${delimiter}`
    };
    let textArray = text.split(/[\n,]/);
    for (item of textArray) {
        trimmedItem = item.trim();
        trimmedItemToLower = trimmedItem.toLowerCase();
        switch (temp.get(trimmedItemToLower)) {
            case(1):
                groups.produce += `\n${trimmedItem}`;
                break;
            case(2):
                groups.toiletries += `\n${trimmedItem}`;
                break;
            default:
                groups.misc += `\n${trimmedItem}`;
                break;
        }
    }
    let grouped = groups.produce + "\n\n" + groups.toiletries + "\n\n" + groups.misc;
    return grouped;
}

const temp = new Map([
    // Produce
    ["apple", 1],
    ["apples", 1],
    ["banana", 1],
    ["bananas", 1],
    ["avacado", 1],
    ["avacados", 1],
    ["potato", 1],
    ["potatoes", 1],

    // Toiletries
    ["shampoo", 2],
    ["conditioner", 2],
    ["soap", 2],
    ["body wash", 2],
    ["toothpaste", 2],
])