var editorDefaults;
(function () {
    // summary: The default options hash used by the Editor

    editorDefaults = {
        activeButtonClass: 'medium-editor-button-active',
        buttonLabels: false,
        delay: 0,
        disableReturn: false,
        disableDoubleReturn: false,
        disableEditing: false,
        autoLink: false,
        elementsContainer: false,
        contentWindow: typeof window === 'undefined' ? false : window,
        ownerDocument: typeof document === 'undefined' ? false : document,
        targetBlank: false,
        extensions: {},
        spellcheck: true
    };
})();
