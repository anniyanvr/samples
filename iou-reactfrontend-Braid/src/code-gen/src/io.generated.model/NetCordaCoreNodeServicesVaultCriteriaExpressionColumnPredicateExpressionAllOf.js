/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import NetCordaCoreNodeServicesVaultColumnObjectObject from './NetCordaCoreNodeServicesVaultColumnObjectObject';

/**
 * The NetCordaCoreNodeServicesVaultCriteriaExpressionColumnPredicateExpressionAllOf model module.
 * @module io.generated.model/NetCordaCoreNodeServicesVaultCriteriaExpressionColumnPredicateExpressionAllOf
 * @version 1.0.0
 */
class NetCordaCoreNodeServicesVaultCriteriaExpressionColumnPredicateExpressionAllOf {
    /**
     * Constructs a new <code>NetCordaCoreNodeServicesVaultCriteriaExpressionColumnPredicateExpressionAllOf</code>.
     * @alias module:io.generated.model/NetCordaCoreNodeServicesVaultCriteriaExpressionColumnPredicateExpressionAllOf
     */
    constructor() { 
        
        NetCordaCoreNodeServicesVaultCriteriaExpressionColumnPredicateExpressionAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NetCordaCoreNodeServicesVaultCriteriaExpressionColumnPredicateExpressionAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:io.generated.model/NetCordaCoreNodeServicesVaultCriteriaExpressionColumnPredicateExpressionAllOf} obj Optional instance to populate.
     * @return {module:io.generated.model/NetCordaCoreNodeServicesVaultCriteriaExpressionColumnPredicateExpressionAllOf} The populated <code>NetCordaCoreNodeServicesVaultCriteriaExpressionColumnPredicateExpressionAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetCordaCoreNodeServicesVaultCriteriaExpressionColumnPredicateExpressionAllOf();

            if (data.hasOwnProperty('column')) {
                obj['column'] = NetCordaCoreNodeServicesVaultColumnObjectObject.constructFromObject(data['column']);
            }
            if (data.hasOwnProperty('predicate')) {
                obj['predicate'] = ApiClient.convertToType(data['predicate'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {module:io.generated.model/NetCordaCoreNodeServicesVaultColumnObjectObject} column
 */
NetCordaCoreNodeServicesVaultCriteriaExpressionColumnPredicateExpressionAllOf.prototype['column'] = undefined;

/**
 * @member {Object} predicate
 */
NetCordaCoreNodeServicesVaultCriteriaExpressionColumnPredicateExpressionAllOf.prototype['predicate'] = undefined;






export default NetCordaCoreNodeServicesVaultCriteriaExpressionColumnPredicateExpressionAllOf;
