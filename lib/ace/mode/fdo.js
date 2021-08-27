efine(function(require, exports, module) {
    "use strict";

    var oop = require("../lib/oop");
    var TextMode = require("./text").Mode;
// Rename MealyHighlightRules to something that matches name of your syntax
    var FdoHighlightRules = require("./fdo_highlight_rules").MealyHighlightRules; // use your $NAME_highlight_rules.js instead of "mealy_highlight_rules"
    var FoldMode = require("./folding/cstyle").FoldMode;

    var Mode = function() {
        this.HighlightRules = MealyHighlightRules;
        this.foldingRules = new FoldMode();
        this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);

    (function() {
        this.lineCommentStart = "//";
        this.$id = "ace/mode/fdo"; //rename this to match your language
        this.snippetFileId = "ace/snippets/fdo"; //rename this to match your language
    }).call(Mode.prototype);

    exports.Mode = Mode;
});