/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface RatingStars {
        "color": string;
        /**
          * Permite editar el valor
         */
        "isEditable": boolean;
        /**
          * Maxim nombre d'estrelles
         */
        "maxValue": number;
        /**
          * Valor del rating
         */
        "value": number;
    }
}
export interface RatingStarsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLRatingStarsElement;
}
declare global {
    interface HTMLRatingStarsElement extends Components.RatingStars, HTMLStencilElement {
    }
    var HTMLRatingStarsElement: {
        prototype: HTMLRatingStarsElement;
        new (): HTMLRatingStarsElement;
    };
    interface HTMLElementTagNameMap {
        "rating-stars": HTMLRatingStarsElement;
    }
}
declare namespace LocalJSX {
    interface RatingStars {
        "color"?: string;
        /**
          * Permite editar el valor
         */
        "isEditable"?: boolean;
        /**
          * Maxim nombre d'estrelles
         */
        "maxValue"?: number;
        /**
          * Event que s'emet quan es clicka una estrella
         */
        "onRatingUpdated"?: (event: RatingStarsCustomEvent<any>) => void;
        /**
          * Valor del rating
         */
        "value"?: number;
    }
    interface IntrinsicElements {
        "rating-stars": RatingStars;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "rating-stars": LocalJSX.RatingStars & JSXBase.HTMLAttributes<HTMLRatingStarsElement>;
        }
    }
}
