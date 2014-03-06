module TyperLog {
    export class TyperLog {
        private static logLevel:TyperLogLevel = TyperLogLevel.WARNING;
        private static console = (()=>{
            var noop = ()=>{};
            var console:{} = window.console || {};
            console["log"] = window.console.log || noop;
            console["trace"] = ()=> {
                try {
                    //noinspection ExceptionCaughtLocallyJS
                    throw {};
                } catch(e) {
                    console["log"](e.trace);
                }
            };
            console["debug"] = window.console.debug || noop;

            return console;
        })();

        public static Log(message:string, level:TyperLogLevel, category:string = "") {
            if (level <= this.logLevel) {
                TyperLog.console["log"](message);
            }

        }

        private static
    }
}