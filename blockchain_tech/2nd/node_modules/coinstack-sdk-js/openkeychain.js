function ISODateString(d) {
    function pad(n) {
        return n < 10 ? '0' + n : n
    }
    return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + 'Z'
}

if (typeof btoa === 'undefined') {
    btoa = function(source) {
        return new Buffer(source).toString('base64');
    }

    atob = function(source) {
        return new Buffer(source, 'base64').toString();
    }
}

OpenKeyChain = {};
OpenKeyChain.threshold = 30 * 60 * 1000; // 30 minutes
OpenKeyChain.checkChallenge = function(challenge, authorityAddress) {
    var challengeObject = JSON.parse(challenge);
    var signature = challengeObject.signature;
    delete challengeObject.signature;
    var challengeTimestamp = Date.parse(challengeObject.timestamp);
    var elapsed = Date.now() - challengeTimestamp;
    if (Date.now() - challengeTimestamp > OpenKeyChain.threshold) {
        throw new Error("challenge expired");
    }

    var preSignedPayload = "{\"context\":\"" + challengeObject.context + "\",\"timestamp\":\"" + challengeObject.timestamp + "\"}";
    return CoinStack.ECDSA.verifyMessageSignature(authorityAddress, preSignedPayload, signature);
}

OpenKeyChain.createResponse = function(challenge, privateKey) {
    var responseObject = {
        certificate: CoinStack.ECKey.deriveAddress(privateKey),
        challenge: btoa(challenge),
        timestamp: ISODateString(new Date())
    }
    var preSignedPayload = JSON.stringify(responseObject);
    responseObject.signature = CoinStack.ECDSA.signMessage(privateKey, preSignedPayload);
    return "{\"certificate\":\"" + responseObject.certificate + "\",\"challenge\":\"" + responseObject.challenge + "\",\"timestamp\":\"" + responseObject.timestamp + "\",\"signature\":\"" + responseObject.signature + "\"}";
}

OpenKeyChain.btoa = btoa;
OpenKeyChain.atob = atob;

if (typeof window === 'undefined') {
    module.exports = OpenKeyChain;
} else {
    window.OpenKeyChain = OpenKeyChain;
}