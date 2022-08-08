window.addEventListener(
    "message",
    (ev) => {
        console.log(ev.origin);
        // Do we trust the sender of this message?  (might be
        // different from what we originally opened, for example).
        if (
            !["http://localhost:3000/"].includes(ev.origin) &&
            ev.data === "handshake"
        )
            return;

        return window.document;
    },
    false
);
