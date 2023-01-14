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
        if (produce.includes(trimmedItemToLower)) {
            groups.produce += `\n${trimmedItem}`;
        } else if (toiletries.includes(trimmedItemToLower)) {
            groups.toiletries += `\n${trimmedItem}`;
        } else {
            groups.misc += `\n${trimmedItem}`;
        }
    }
    let grouped = groups.produce + "\n\n" + groups.toiletries + "\n\n" + groups.misc;
    return grouped;
}

const produce = [
    "apples",
    "apple",
    "bananas",
    "banana",
    "avacados",
    "avacado",
    "potatoes",
    "potato",
]

const toiletries = [
    "shampoo",
    "conditioner",
    "soap",
    "body wash",
    "toothpaste",
]