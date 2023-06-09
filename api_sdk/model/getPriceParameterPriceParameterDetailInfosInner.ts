/**
 * Create Price Parameter
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0-oas3-oas3.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export interface GetPriceParameterPriceParameterDetailInfosInner {
  /**
   * ID of the price parameter detail
   */
  id?: number;
  /**
   * Price of the price parameter detail
   */
  price?: number;
  /**
   * Indicates whether the hour is shifted for the price parameter detail
   */
  isShiftedHour?: boolean;
  /**
   * Start time of the period for the price parameter detail
   */
  periodFrom?: string;
  /**
   * End time of the period for the price parameter detail
   */
  periodTo?: string;
  /**
   * Years unit of the start time of the period for the price parameter detail
   */
  periodFromYearsUnit?: number;
  /**
   * Months unit of the start time of the period for the price parameter detail
   */
  periodFromMonthsUnit?: number;
  /**
   * Days unit of the start time of the period for the price parameter detail
   */
  periodFromDaysUnit?: number;
}
