/**
 * Created by joaogabriellima on 21/12/17.
 */

import { Analytics, PageHit } from './components/expo-googleanalytics';

const analytics = new Analytics('UA-111516806-1');

export default class Util {

    static getTrackerPage=(page)=>{
        analytics.hit(new PageHit(page));
    }
}