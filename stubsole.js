if (typeof window.console === 'undefined') {
    var noop = function() {};
    window.console = {
        log: noop,  
        debug: noop,  
        info: noop,  
        warn: noop,  
        error: noop,  
        assert: noop,  
        clear: noop,  
        dir: noop,  
        dirxml: noop,  
        trace: noop,  
        group: noop,  
        groupCollapsed: noop,  
        groupEnd: noop,  
        time: noop,  
        timeEnd: noop,  
        profile: noop,  
        profileEnd: noop,  
        count: noop,  
        exception: noop,  
        table: noop 
    };
}
