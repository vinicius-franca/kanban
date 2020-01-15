export function eventBus($provide){
    $provide.decorator('$rootScope', function($delegate){
        let proto = $delegate.constructor.prototype;

        proto.subscribe = function(event, listener) {
            var unsubscribe = $delegate.$on(event, listener);
            this.$on('$destroy', unsubscribe);
        };
        
        proto.publish = function(event, data) {
            $delegate.$emit(event, data);
        };
        
        return $delegate; 
    });
}