import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import jsdom from 'jsdom';

configure({ adapter: new Adapter() });

// Use React Native Mock
require('react-native-mock-render/mock');

// Set up jsdom
const { JSDOM } = jsdom;

const { document } = new JSDOM('').window;
global.document = document;
