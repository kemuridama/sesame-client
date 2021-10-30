export const Commands = {
  LOCK: 82,
  UNLOCK: 83,
  TOGGLE: 88,
} as const;

export type Command = typeof Commands[keyof typeof Commands];

export type CommandOption = "lock" | "unlock" | "toggle";
export const CommandOptions: readonly CommandOption[] = [
  "lock",
  "unlock",
  "toggle",
];

export const Types = {
  NONE: 0,
  BLE_LOCK: 1,
  BLE_UNLOCK: 2,
  TIME_CHANGED: 3,
  AUTO_LOCK_UPDATED: 4,
  MECH_SETTING_UPDATED: 5,
  AUTO_LOCK: 6,
  MANUAL_LOCKED: 7,
  MANUAL_UNLOCKED: 8,
  MANUAL_ELSE: 9,
  DRIVE_LOCKED: 10,
  DRIVE_UNLOCKED: 11,
  DRIVE_FAILED: 12,
  BLE_ADV_PARAMETER_UPDATED: 13,
} as const;

export type Type = typeof Types[keyof typeof Types];

export const Statuses = {
  LOCKED: "locked",
  UNLOCKED: "unlocked",
  MOVED: "moved",
} as const;

export type Status = typeof Statuses[keyof typeof Statuses];
