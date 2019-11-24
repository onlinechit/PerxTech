import { Attributes } from './Attributes';
import { Relationships } from './Relationships';
import { Links } from './Links';

export interface Data {
    id: String;
    type: String;
    links: Links;
    attributes: Attributes;
    relationships: Relationships;
}