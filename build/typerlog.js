var TyperLog;
(function (_TyperLog) {
    var TyperLog = (function () {
        function TyperLog() {
        }
        TyperLog.Log = function (message, level, category) {
            if (typeof category === "undefined") { category = ""; }
            if (level <= this.logLevel) {
                TyperLog.console["log"](message);
            }
        };
        TyperLog.logLevel = 4 /* WARNING */;
        TyperLog.console = (function () {
            var noop = function () {
            };
            var console = window.console || {};
            console["log"] = window.console.log || noop;
            console["trace"] = function () {
                try  {
                    throw {};
                } catch (e) {
                    console["log"](e.trace);
                }
            };
            console["debug"] = window.console.debug || noop;

            return console;
        })();
        return TyperLog;
    })();
    _TyperLog.TyperLog = TyperLog;
})(TyperLog || (TyperLog = {}));
var TyperLog;
(function (TyperLog) {
    (function (TyperLogLevel) {
        TyperLogLevel[TyperLogLevel["EMERGENCY"] = 0] = "EMERGENCY";
        TyperLogLevel[TyperLogLevel["ALERT"] = 1] = "ALERT";
        TyperLogLevel[TyperLogLevel["CRITICAL"] = 2] = "CRITICAL";
        TyperLogLevel[TyperLogLevel["ERROR"] = 3] = "ERROR";
        TyperLogLevel[TyperLogLevel["WARNING"] = 4] = "WARNING";
        TyperLogLevel[TyperLogLevel["NOTICE"] = 5] = "NOTICE";
        TyperLogLevel[TyperLogLevel["INFORMATIONAL"] = 6] = "INFORMATIONAL";
        TyperLogLevel[TyperLogLevel["DEBUG"] = 7] = "DEBUG";
    })(TyperLog.TyperLogLevel || (TyperLog.TyperLogLevel = {}));
    var TyperLogLevel = TyperLog.TyperLogLevel;
})(TyperLog || (TyperLog = {}));
//# sourceMappingURL=typerlog.js.map
