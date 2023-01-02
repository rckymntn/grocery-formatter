let delimiter = "###";

window.onload = () => {
    let sortButtonElement = document.querySelector("#sortButton");
    if (sortButtonElement) {
        sortButtonElement.addEventListener("click", () => {
            let inputText = document.querySelector("#inputTextArea").value;
            document.querySelector("#outputTextArea").value = "";
            document.querySelector("#outputTextArea").value = group(inputText);
        });
    }

    let copyButtonElement = document.querySelector("#copyButton");
    if (copyButtonElement) {
        copyButtonElement.addEventListener("click", () => {
            navigator.clipboard.writeText(document.querySelector("#outputTextArea").value);
        });
    }

    let clearButtonElement = document.querySelector("#clearButton");
    if (clearButtonElement) {
        clearButtonElement.addEventListener("click", () => {
            if (confirm("Are you sure you would like to clear your list?")) {
                document.querySelector("#inputTextArea").value = "";
                document.querySelector("#outputTextArea").value = "";
            }
        });
    }

    let selectDelimiterElement = document.querySelector("#delimiterSelect");
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