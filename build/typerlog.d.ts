declare module TyperLog {
    class TyperLog {
        private static logLevel;
        private static console;
        static Log(message: string, level: TyperLogLevel, category?: string): void;
        private static;
    }
}
declare module TyperLog {
    enum TyperLogLevel {
        EMERGENCY = 0,
        ALERT = 1,
        CRITICAL = 2,
        ERROR = 3,
        WARNING = 4,
        NOTICE = 5,
        INFORMATIONAL = 6,
        DEBUG = 7,
    }
}
