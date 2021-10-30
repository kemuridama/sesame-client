export declare const Commands: {
    readonly LOCK: 82;
    readonly UNLOCK: 83;
    readonly TOGGLE: 88;
};
export declare type Command = typeof Commands[keyof typeof Commands];
export declare type CommandOption = "lock" | "unlock" | "toggle";
export declare const CommandOptions: readonly CommandOption[];
export declare const Types: {
    readonly NONE: 0;
    readonly BLE_LOCK: 1;
    readonly BLE_UNLOCK: 2;
    readonly TIME_CHANGED: 3;
    readonly AUTO_LOCK_UPDATED: 4;
    readonly MECH_SETTING_UPDATED: 5;
    readonly AUTO_LOCK: 6;
    readonly MANUAL_LOCKED: 7;
    readonly MANUAL_UNLOCKED: 8;
    readonly MANUAL_ELSE: 9;
    readonly DRIVE_LOCKED: 10;
    readonly DRIVE_UNLOCKED: 11;
    readonly DRIVE_FAILED: 12;
    readonly BLE_ADV_PARAMETER_UPDATED: 13;
};
export declare type Type = typeof Types[keyof typeof Types];
export declare const Statuses: {
    readonly LOCKED: "locked";
    readonly UNLOCKED: "unlocked";
    readonly MOVED: "moved";
};
export declare type Status = typeof Statuses[keyof typeof Statuses];
