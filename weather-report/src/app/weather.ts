import {Astronomy} from "./astronomy";
import {Current} from "./current";
import {Location} from "./location";

export class Weather {

  constructor(
    public location: Location,
    public current: Current,
    public astronomy: Astronomy
  ) {}
}
