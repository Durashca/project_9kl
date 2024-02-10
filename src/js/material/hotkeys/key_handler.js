let checkingCopy = document.querySelector("#checked-copy");
let checkingPaste = document.querySelector("#checked-paste");
let checkingCut = document.querySelector("#checked-cut");
let checkingUndo = document.querySelector("#checked-undo");

// copy
let copyText = document.querySelector("#copy");
copyText.addEventListener('copy', (event) => {
    let copiedText = window.getSelection().toString();
    let fullText = copyText.textContent.trim();

    if (copiedText === fullText)
        checkingCopy.className = "checkmark";
});

// paste
let pasteInput = document.querySelector("#paste");
pasteInput.addEventListener('paste', (event) => {
    let fullText = copyText.textContent.trim();
    let pastedText = (event.clipboardData || window.clipboardData).getData('text');
    let correctText = pastedText === fullText;

    if (correctText)
        checkingPaste.className = "checkmark";
});

// cut
let cutInput = document.querySelector("#cut");

let cutText = cutInput.value;
cutInput.addEventListener('cut', (event) => {
    let clippedText = window.getSelection().toString();
    let correctText = cutText === clippedText;

    if (correctText)
        checkingCut.className = "checkmark";
});

// undo
let undoInput = document.querySelector("#undo");
/*undoInput.addEventListener('input', (event) => {
    let clippedText = window.getSelection().toString();
    let correctText = cutText === clippedText;

    if (correctText)
        checkingCut.className = "checkmark";
});*/

undoInput.focus();
document.execCommand('insertHTML',false, cutText);
document.execCommand('selectAll',false);
document.execCommand('insertHTML',false, "");

undoInput.blur();

