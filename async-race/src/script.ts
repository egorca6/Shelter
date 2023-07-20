import { createClick, garageView } from './garage';
import './style.css';
import { buildHtml } from './utils';
import { winnerView } from './winners';

buildHtml();

winnerView();
garageView();

createClick();
