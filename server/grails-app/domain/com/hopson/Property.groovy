package com.hopson

import grails.rest.Resource

@Resource(uri='/property')
class Property {

    String address
    String estimate
    String bed
    String bath
    String sqft

    static hasMany = [propertyTypes: PropertyType]

    static constraints = {
        address blank:false
        estimate blank:false
        bed blank:false
        bath blank:false
        sqft blank:false
        propertyTypes display: false
    }

}
