import SocketIOClient from 'socket.io-client';

import Config from '../config.js';

import { addMatch } from '../actions/match';

var socket;

function init(dispatch) {
    socket = SocketIOClient(Config.SERVER);

    socket.on('connect', () => {
        _refresh();
    });
    socket.on('reconnect', () => {
        _refresh();
    });

    socket.on('submit_match', (match) => {
        dispatch(addMatch(match));
    });
}

function submitMatch(match) {
    if (!socket) return;

    socket.emit('submit_match', JSON.stringify(match));
}

function _refresh() {
    if (!socket) return;

    socket.emit('request_update', '0');
}

export default {
    init,
    submitMatch
};
