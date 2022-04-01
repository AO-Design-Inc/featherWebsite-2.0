import fsm from 'svelte-fsm';
// import Welcome, { popUpMachine } from '../routes/welcome.svelte'

const popUpMachine = fsm('HIDDEN', {
    HIDDEN: {
        show: 'SHOWING',
        mac: 'SHOW_MAC',
        linux: 'SHOW_LINUX'
    },
    SHOW_MAC: {
        hide: 'HIDDEN',
        _exit() {
            // downloadMachine.done()
        },
    },
    SHOW_LINUX: {
        hide: 'HIDDEN',
        _exit() {
            // downloadMachine.done()
        },
    }
});

export { popUpMachine }
