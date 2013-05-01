Type.registerNamespace('Sample.Client');

Sample.Client.Environment = function Sample_Client_Environment() {
}
Sample.Client.Environment.get_wsdlElementTable = function Sample_Client_Environment$get_wsdlElementTable() {
    return Sample.Client.Environment._wsdlElementTable$p;
}
Sample.Client.Environment.getEnvironment = function Sample_Client_Environment$getEnvironment(successCallback, failureCallback) {
    SOAPClient.asyncInvoke((window.location.protocol + '//localhost:63452/Environment.asmx'), 'GetEnvironment', null, ((successCallback)), ((failureCallback)), 'Sample.Client.Environment');
}
Sample.Client.Environment.prototype = {
    
    getTargetNameSpace: function Sample_Client_Environment$getTargetNameSpace() {
        return 'http://tempuri.org/';
    }
}


Sample.Client.Environment.registerClass('Sample.Client.Environment');
Sample.Client.Environment._wsdlElementTable$p = {"GetEnvironmentResponse": {"GetEnvironmentResult" : "string"}};
