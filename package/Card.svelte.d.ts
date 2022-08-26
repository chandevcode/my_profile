import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        name?: string | undefined;
        icon?: string | undefined;
        links?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type CardProps = typeof __propDef.props;
export declare type CardEvents = typeof __propDef.events;
export declare type CardSlots = typeof __propDef.slots;
export default class Card extends SvelteComponentTyped<CardProps, CardEvents, CardSlots> {
}
export {};
