const PRODUCE = 1;
const TOILETRIES = 2;
const COOKING = 3;
const MEAT = 4;
const DAIRY = 5;
const CANNED = 6;
const BAKERY = 7;
const BEVERAGE = 8;
const FROZEN = 9;

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
        cooking: `${delimiter} COOKING ${delimiter}`,
        meat: `${delimiter} MEAT ${delimiter}`,
        dairy: `${delimiter} DAIRY ${delimiter}`,
        canned: `${delimiter} CANNED ${delimiter}`,
        bakery: `${delimiter} BAKERY ${delimiter}`,
        beverage: `${delimiter} BEVERAGE ${delimiter}`,
        frozen: `${delimiter} FROZEN ${delimiter}`,
        misc: `${delimiter} MISC ${delimiter}`
    };
    let textArray = text.split(/[\n,]/);
    for (item of textArray) {
        trimmedItem = item.trim();
        trimmedItemToLower = trimmedItem.toLowerCase();
        switch (items.get(trimmedItemToLower)) {
            case(PRODUCE):
                groups.produce += `\n${trimmedItem}`;
                break;
            case(TOILETRIES):
                groups.toiletries += `\n${trimmedItem}`;
                break;
            case(COOKING):
                groups.cooking += `\n${trimmedItem}`;
                break;
            case(MEAT):
                groups.meat += `\n${trimmedItem}`;
                break;
            case(DAIRY):
                groups.dairy += `\n${trimmedItem}`;
                break;
            case(CANNED):
                groups.canned += `\n${trimmedItem}`;
                break;
            case(BAKERY):
                groups.bakery += `\n${trimmedItem}`;
                break;
            case(BEVERAGE):
                groups.beverage += `\n${trimmedItem}`;
                break;
            case(FROZEN):
                groups.frozen += `\n${trimmedItem}`;
                break;
            default:
                groups.misc += `\n${trimmedItem}`;
                break;
        }
    }
    let grouped = groups.produce + "\n\n" + groups.toiletries + "\n\n" + groups.cooking + "\n\n" + groups.meat + "\n\n" + groups.dairy + "\n\n" + groups.canned + "\n\n" + groups.bakery + "\n\n" + groups.beverage + "\n\n" + groups.frozen + "\n\n" + groups.misc;
    return grouped;
}

const items = new Map([
    // Produce
    ["apple", PRODUCE],
    ["apples", PRODUCE],
    ["banana", PRODUCE],
    ["bananas", PRODUCE],
    ["avacado", PRODUCE],
    ["avacados", PRODUCE],
    ["potato", PRODUCE],
    ["potatoes", PRODUCE],
    ["cucumber", PRODUCE],
    ["cucumbers", PRODUCE],
    ["tomato", PRODUCE],
    ["tomatoes", PRODUCE],
    ["carrot", PRODUCE],
    ["carrots", PRODUCE],
    ["kale", PRODUCE],
    ["spinach", PRODUCE],

    // Toiletries
    ["shampoo", TOILETRIES],
    ["conditioner", TOILETRIES],
    ["soap", TOILETRIES],
    ["body wash", TOILETRIES],
    ["toothpaste", TOILETRIES],

    // Cooking
    ["flour", COOKING],
    ["olive oil", COOKING],
    ["vinegar", COOKING],
    ["white vinegar", COOKING],
    ["apple cider vinegar", COOKING],
    ["rice wine vinegar", COOKING],

    // Meat
    ["beef", MEAT],
    ["ground beef", MEAT],
    ["steak", MEAT],
    ["steaks", MEAT],
    ["sausage", MEAT],
    ["sausages", MEAT],
    ["chicken", MEAT],

    // Dairy
    ["milk", DAIRY],
    ["cream", DAIRY],
    ["egg", DAIRY],
    ["eggs", DAIRY],

    // Canned 
    ["canned beans", CANNED],
    ["canned fruit", CANNED],
    ["canned fruits", CANNED],
    ["canned vegetables", CANNED],

    // Bakery
    ["bread", BAKERY],

    // Beverage
    ["coffee", BEVERAGE],
    ["tea", BEVERAGE],

    // Frozen 
    ["frozen beans", CANNED],
    ["frozen fruit", CANNED],
    ["frozen fruits", CANNED],
    ["frozen vegetables", CANNED],
])