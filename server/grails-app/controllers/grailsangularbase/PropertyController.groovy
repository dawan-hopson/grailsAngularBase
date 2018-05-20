package grailsangularbase

import com.hopson.PropertyType

class PropertyController {
	static responseFormats = ['json', 'xml']
	
    def index() { }

    def list() {

        List<PropertyType> propertyTypes = PropertyType.values()
        respond propertyTypes, formats: ['json']
    }
}
