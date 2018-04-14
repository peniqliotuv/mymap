import TOGGLE_EVENT from './actions'
import SET_PREFERENCE from './actions'

const defaultState = {
	activeApps: [],
	notifications: [],
};

export default (state = defaultState, action) => {
	switch(action.type) {
		case 'TOGGLE_EVENT':
			const { appName } = action;
			const activeApps = state.activeApps;
			if (activeApps.includes(appName)) {
				const index = activeApps.indexOf(appName);
				activeApps.splice(index, 1);
			} else {
				activeApps.push(appName);
			}
			return {
				...state,
				activeApps,
			}
		case 'SET_PREFERENCE':
			const { settingType } = action;
			const notifications = state.notifications;
			if (notifications.includes(settingType)) {
				const index = notifications.indexOf(settingType);
				notifications.splice(index, 1);
			} else {
				notifications.push(settingType);
			}
			return {
				...state,
				notifications,
			}
		default:
			return state;
	}
}
