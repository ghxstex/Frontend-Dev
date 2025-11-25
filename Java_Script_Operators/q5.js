var isDoorLocked = true;
var isWindowClosed = true;
var isAlarmOn = true;
var isOwnerInside = true;

if (isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

isOwnerInside = false;

if (isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}
