$(function () {

    // Fake data for countries and cities from 2003 to 2013
    var data = {
        "2009": {
            "areas": {
                "AF": {
                    "value": 52466800,
                    "href": "http://en.wikipedia.org/w/index.php?search=Afghanistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Afghanistan</span><br />Population : 52466800"
                    }
                },
                "ZA": {
                    "value": 26108826,
                    "href": "http://en.wikipedia.org/w/index.php?search=South Africa",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Africa</span><br />Population : 26108826"
                    }
                },
                "AL": {
                    "value": 53559946,
                    "href": "http://en.wikipedia.org/w/index.php?search=Albania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Albania</span><br />Population : 53559946"
                    }
                },
                "DZ": {
                    "value": 49796088,
                    "href": "http://en.wikipedia.org/w/index.php?search=Algeria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Algeria</span><br />Population : 49796088"
                    }
                },
                "DE": {
                    "value": 16718374,
                    "href": "http://en.wikipedia.org/w/index.php?search=Germany",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Germany</span><br />Population : 16718374"
                    }
                },
                "AD": {
                    "value": 26774219,
                    "href": "http://en.wikipedia.org/w/index.php?search=Andorra",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Andorra</span><br />Population : 26774219"
                    }
                },
                "AO": {
                    "value": 54956540,
                    "href": "http://en.wikipedia.org/w/index.php?search=Angola",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Angola</span><br />Population : 54956540"
                    }
                },
                "AG": {
                    "value": 56018610,
                    "href": "http://en.wikipedia.org/w/index.php?search=Antigua And Barbuda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Antigua And Barbuda</span><br />Population : 56018610"
                    }
                },
                "SA": {
                    "value": 54792020,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saudi Arabia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saudi Arabia</span><br />Population : 54792020"
                    }
                },
                "AR": {
                    "value": 47445276,
                    "href": "http://en.wikipedia.org/w/index.php?search=Argentina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Argentina</span><br />Population : 47445276"
                    }
                },
                "AM": {
                    "value": 20670517,
                    "href": "http://en.wikipedia.org/w/index.php?search=Armenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Armenia</span><br />Population : 20670517"
                    }
                },
                "AU": {
                    "value": 6435858,
                    "href": "http://en.wikipedia.org/w/index.php?search=Australia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Australia</span><br />Population : 6435858"
                    }
                },
                "AT": {
                    "value": 59990860,
                    "href": "http://en.wikipedia.org/w/index.php?search=Austria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Austria</span><br />Population : 59990860"
                    }
                },
                "AZ": {
                    "value": 18862622,
                    "href": "http://en.wikipedia.org/w/index.php?search=Azerbaijan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Azerbaijan</span><br />Population : 18862622"
                    }
                },
                "BS": {
                    "value": 8730001,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bahamas",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahamas</span><br />Population : 8730001"
                    }
                },
                "BH": {
                    "value": 56413459,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bahrain",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahrain</span><br />Population : 56413459"
                    }
                },
                "BD": {
                    "value": 15468020,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bangladesh",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bangladesh</span><br />Population : 15468020"
                    }
                },
                "BB": {
                    "value": 21516882,
                    "href": "http://en.wikipedia.org/w/index.php?search=Barbados",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Barbados</span><br />Population : 21516882"
                    }
                },
                "BE": {
                    "value": 47213120,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belgium",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belgium</span><br />Population : 47213120"
                    }
                },
                "BZ": {
                    "value": 31867035,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belize",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belize</span><br />Population : 31867035"
                    }
                },
                "BJ": {
                    "value": 54126627,
                    "href": "http://en.wikipedia.org/w/index.php?search=Benin",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Benin</span><br />Population : 54126627"
                    }
                },
                "BT": {
                    "value": 46048682,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bhutan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bhutan</span><br />Population : 46048682"
                    }
                },
                "BY": {
                    "value": 14447995,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belarus",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belarus</span><br />Population : 14447995"
                    }
                },
                "MM": {
                    "value": 28262213,
                    "href": "http://en.wikipedia.org/w/index.php?search=Myanmar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Myanmar</span><br />Population : 28262213"
                    }
                },
                "BO": {
                    "value": 39319803,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bolivia, Plurinational State Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bolivia, Plurinational State Of</span><br />Population : 39319803"
                    }
                },
                "BA": {
                    "value": 53148645,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bosnia And Herzegovina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bosnia And Herzegovina</span><br />Population : 53148645"
                    }
                },
                "BW": {
                    "value": 58312754,
                    "href": "http://en.wikipedia.org/w/index.php?search=Botswana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Botswana</span><br />Population : 58312754"
                    }
                },
                "BR": {
                    "value": 51214618,
                    "href": "http://en.wikipedia.org/w/index.php?search=Brazil",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brazil</span><br />Population : 51214618"
                    }
                },
                "BN": {
                    "value": 44050675,
                    "href": "http://en.wikipedia.org/w/index.php?search=Brunei Darussalam",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brunei Darussalam</span><br />Population : 44050675"
                    }
                },
                "BG": {
                    "value": 33457398,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bulgaria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bulgaria</span><br />Population : 33457398"
                    }
                },
                "BF": {
                    "value": 57135520,
                    "href": "http://en.wikipedia.org/w/index.php?search=Burkina Faso",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burkina Faso</span><br />Population : 57135520"
                    }
                },
                "BI": {
                    "value": 16489874,
                    "href": "http://en.wikipedia.org/w/index.php?search=Burundi",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burundi</span><br />Population : 16489874"
                    }
                },
                "KH": {
                    "value": 51472367,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cambodia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cambodia</span><br />Population : 51472367"
                    }
                },
                "CM": {
                    "value": 7565564,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cameroon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cameroon</span><br />Population : 7565564"
                    }
                },
                "CA": {
                    "value": 38994418,
                    "href": "http://en.wikipedia.org/w/index.php?search=Canada",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Canada</span><br />Population : 38994418"
                    }
                },
                "CV": {
                    "value": 49503608,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cape Verde",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cape Verde</span><br />Population : 49503608"
                    }
                },
                "CF": {
                    "value": 14788003,
                    "href": "http://en.wikipedia.org/w/index.php?search=Central African Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Central African Republic</span><br />Population : 14788003"
                    }
                },
                "CL": {
                    "value": 26013769,
                    "href": "http://en.wikipedia.org/w/index.php?search=Chile",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chile</span><br />Population : 26013769"
                    }
                },
                "CN": {
                    "value": 2017575,
                    "href": "http://en.wikipedia.org/w/index.php?search=China",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">China</span><br />Population : 2017575"
                    }
                },
                "CY": {
                    "value": 6121441,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cyprus",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cyprus</span><br />Population : 6121441"
                    }
                },
                "CO": {
                    "value": 36950711,
                    "href": "http://en.wikipedia.org/w/index.php?search=Colombia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Colombia</span><br />Population : 36950711"
                    }
                },
                "KM": {
                    "value": 49492639,
                    "href": "http://en.wikipedia.org/w/index.php?search=Comoros",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Comoros</span><br />Population : 49492639"
                    }
                },
                "CG": {
                    "value": 34183115,
                    "href": "http://en.wikipedia.org/w/index.php?search=Congo",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo</span><br />Population : 34183115"
                    }
                },
                "CD": {
                    "value": 11759002,
                    "href": "http://en.wikipedia.org/w/index.php?search=Congo, The Democratic Republic Of The",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo, The Democratic Republic Of The</span><br />Population : 11759002"
                    }
                },
                "KP": {
                    "value": 11263614,
                    "href": "http://en.wikipedia.org/w/index.php?search=Korea, Democratic People's Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Democratic People's Republic Of</span><br />Population : 11263614"
                    }
                },
                "KR": {
                    "value": 8742797,
                    "href": "http://en.wikipedia.org/w/index.php?search=Korea, Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Republic Of</span><br />Population : 8742797"
                    }
                },
                "CR": {
                    "value": 13819162,
                    "href": "http://en.wikipedia.org/w/index.php?search=Costa Rica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Costa Rica</span><br />Population : 13819162"
                    }
                },
                "CI": {
                    "value": 42081915,
                    "href": "http://en.wikipedia.org/w/index.php?search=C\u00d4te D'ivoire",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">C\u00d4te D'ivoire</span><br />Population : 42081915"
                    }
                },
                "HR": {
                    "value": 40679837,
                    "href": "http://en.wikipedia.org/w/index.php?search=Croatia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Croatia</span><br />Population : 40679837"
                    }
                },
                "CU": {
                    "value": 44154871,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cuba",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cuba</span><br />Population : 44154871"
                    }
                },
                "DK": {
                    "value": 28903842,
                    "href": "http://en.wikipedia.org/w/index.php?search=Denmark",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Denmark</span><br />Population : 28903842"
                    }
                },
                "DJ": {
                    "value": 42805805,
                    "href": "http://en.wikipedia.org/w/index.php?search=Djibouti",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Djibouti</span><br />Population : 42805805"
                    }
                },
                "DM": {
                    "value": 18502505,
                    "href": "http://en.wikipedia.org/w/index.php?search=Dominica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominica</span><br />Population : 18502505"
                    }
                },
                "EG": {
                    "value": 26569482,
                    "href": "http://en.wikipedia.org/w/index.php?search=Egypt",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Egypt</span><br />Population : 26569482"
                    }
                },
                "AE": {
                    "value": 17665280,
                    "href": "http://en.wikipedia.org/w/index.php?search=United Arab Emirates",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Arab Emirates</span><br />Population : 17665280"
                    }
                },
                "EC": {
                    "value": 49496295,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ecuador",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ecuador</span><br />Population : 49496295"
                    }
                },
                "ER": {
                    "value": 47684745,
                    "href": "http://en.wikipedia.org/w/index.php?search=Eritrea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Eritrea</span><br />Population : 47684745"
                    }
                },
                "ES": {
                    "value": 36477258,
                    "href": "http://en.wikipedia.org/w/index.php?search=Spain",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Spain</span><br />Population : 36477258"
                    }
                },
                "EE": {
                    "value": 8181601,
                    "href": "http://en.wikipedia.org/w/index.php?search=Estonia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Estonia</span><br />Population : 8181601"
                    }
                },
                "US": {
                    "value": 7869012,
                    "href": "http://en.wikipedia.org/w/index.php?search=United States",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United States</span><br />Population : 7869012"
                    }
                },
                "ET": {
                    "value": 21529678,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ethiopia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ethiopia</span><br />Population : 21529678"
                    }
                },
                "FJ": {
                    "value": 4618823,
                    "href": "http://en.wikipedia.org/w/index.php?search=Fiji",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Fiji</span><br />Population : 4618823"
                    }
                },
                "FI": {
                    "value": 58480930,
                    "href": "http://en.wikipedia.org/w/index.php?search=Finland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Finland</span><br />Population : 58480930"
                    }
                },
                "FR": {
                    "value": 13389581,
                    "href": "http://en.wikipedia.org/w/index.php?search=France",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">France</span><br />Population : 13389581"
                    }
                },
                "GA": {
                    "value": 42990433,
                    "href": "http://en.wikipedia.org/w/index.php?search=Gabon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gabon</span><br />Population : 42990433"
                    }
                },
                "GM": {
                    "value": 11484802,
                    "href": "http://en.wikipedia.org/w/index.php?search=Gambia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gambia</span><br />Population : 11484802"
                    }
                },
                "GE": {
                    "value": 16941391,
                    "href": "http://en.wikipedia.org/w/index.php?search=Georgia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Georgia</span><br />Population : 16941391"
                    }
                },
                "GH": {
                    "value": 11773626,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ghana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ghana</span><br />Population : 11773626"
                    }
                },
                "GR": {
                    "value": 5370132,
                    "href": "http://en.wikipedia.org/w/index.php?search=Greece",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Greece</span><br />Population : 5370132"
                    }
                },
                "GD": {
                    "value": 47715821,
                    "href": "http://en.wikipedia.org/w/index.php?search=Grenada",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Grenada</span><br />Population : 47715821"
                    }
                },
                "GT": {
                    "value": 1491110,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guatemala",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guatemala</span><br />Population : 1491110"
                    }
                },
                "GN": {
                    "value": 38586774,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea</span><br />Population : 38586774"
                    }
                },
                "GQ": {
                    "value": 11621902,
                    "href": "http://en.wikipedia.org/w/index.php?search=Equatorial Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Equatorial Guinea</span><br />Population : 11621902"
                    }
                },
                "GW": {
                    "value": 14102502,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guinea-bissau",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea-bissau</span><br />Population : 14102502"
                    }
                },
                "GY": {
                    "value": 40208212,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guyana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guyana</span><br />Population : 40208212"
                    }
                },
                "HT": {
                    "value": 39544647,
                    "href": "http://en.wikipedia.org/w/index.php?search=Haiti",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Haiti</span><br />Population : 39544647"
                    }
                },
                "HN": {
                    "value": 14948868,
                    "href": "http://en.wikipedia.org/w/index.php?search=Honduras",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Honduras</span><br />Population : 14948868"
                    }
                },
                "HU": {
                    "value": 21085473,
                    "href": "http://en.wikipedia.org/w/index.php?search=Hungary",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Hungary</span><br />Population : 21085473"
                    }
                },
                "JM": {
                    "value": 11420822,
                    "href": "http://en.wikipedia.org/w/index.php?search=Jamaica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jamaica</span><br />Population : 11420822"
                    }
                },
                "JP": {
                    "value": 50212873,
                    "href": "http://en.wikipedia.org/w/index.php?search=Japan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Japan</span><br />Population : 50212873"
                    }
                },
                "MH": {
                    "value": 58404154,
                    "href": "http://en.wikipedia.org/w/index.php?search=Marshall Islands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Marshall Islands</span><br />Population : 58404154"
                    }
                },
                "PW": {
                    "value": 29355359,
                    "href": "http://en.wikipedia.org/w/index.php?search=Palau",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palau</span><br />Population : 29355359"
                    }
                },
                "SB": {
                    "value": 3107064,
                    "href": "http://en.wikipedia.org/w/index.php?search=Solomon Islands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Solomon Islands</span><br />Population : 3107064"
                    }
                },
                "IN": {
                    "value": 16307074,
                    "href": "http://en.wikipedia.org/w/index.php?search=India",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">India</span><br />Population : 16307074"
                    }
                },
                "ID": {
                    "value": 35290884,
                    "href": "http://en.wikipedia.org/w/index.php?search=Indonesia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Indonesia</span><br />Population : 35290884"
                    }
                },
                "JO": {
                    "value": 29552783,
                    "href": "http://en.wikipedia.org/w/index.php?search=Jordan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jordan</span><br />Population : 29552783"
                    }
                },
                "IR": {
                    "value": 13395065,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iran, Islamic Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iran, Islamic Republic Of</span><br />Population : 13395065"
                    }
                },
                "IQ": {
                    "value": 33292877,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iraq",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iraq</span><br />Population : 33292877"
                    }
                },
                "IE": {
                    "value": 48562186,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ireland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ireland</span><br />Population : 48562186"
                    }
                },
                "IS": {
                    "value": 42268372,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iceland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iceland</span><br />Population : 42268372"
                    }
                },
                "IL": {
                    "value": 10462948,
                    "href": "http://en.wikipedia.org/w/index.php?search=Israel",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Israel</span><br />Population : 10462948"
                    }
                },
                "IT": {
                    "value": 46885907,
                    "href": "http://en.wikipedia.org/w/index.php?search=Italy",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Italy</span><br />Population : 46885907"
                    }
                },
                "KZ": {
                    "value": 51421183,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kazakhstan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kazakhstan</span><br />Population : 51421183"
                    }
                },
                "KE": {
                    "value": 58142749,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kenya",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kenya</span><br />Population : 58142749"
                    }
                },
                "KG": {
                    "value": 52338840,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kyrgyzstan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kyrgyzstan</span><br />Population : 52338840"
                    }
                },
                "KI": {
                    "value": 32751788,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kiribati",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kiribati</span><br />Population : 32751788"
                    }
                },
                "KW": {
                    "value": 27020999,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kuwait",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kuwait</span><br />Population : 27020999"
                    }
                },
                "LA": {
                    "value": 37866541,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lao People's Democratic Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lao People's Democratic Republic</span><br />Population : 37866541"
                    }
                },
                "LS": {
                    "value": 47300864,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lesotho",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lesotho</span><br />Population : 47300864"
                    }
                },
                "LV": {
                    "value": 56406147,
                    "href": "http://en.wikipedia.org/w/index.php?search=Latvia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Latvia</span><br />Population : 56406147"
                    }
                },
                "LB": {
                    "value": 48364762,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lebanon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lebanon</span><br />Population : 48364762"
                    }
                },
                "LR": {
                    "value": 31980371,
                    "href": "http://en.wikipedia.org/w/index.php?search=Liberia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liberia</span><br />Population : 31980371"
                    }
                },
                "LY": {
                    "value": 53377146,
                    "href": "http://en.wikipedia.org/w/index.php?search=Libya",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Libya</span><br />Population : 53377146"
                    }
                },
                "LI": {
                    "value": 33614606,
                    "href": "http://en.wikipedia.org/w/index.php?search=Liechtenstein",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liechtenstein</span><br />Population : 33614606"
                    }
                },
                "LT": {
                    "value": 38705594,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lithuania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lithuania</span><br />Population : 38705594"
                    }
                },
                "LU": {
                    "value": 1174865,
                    "href": "http://en.wikipedia.org/w/index.php?search=Luxembourg",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Luxembourg</span><br />Population : 1174865"
                    }
                },
                "MK": {
                    "value": 38745810,
                    "href": "http://en.wikipedia.org/w/index.php?search=Macedonia, The Former Yugoslav Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Macedonia, The Former Yugoslav Republic Of</span><br />Population : 38745810"
                    }
                },
                "MG": {
                    "value": 29892792,
                    "href": "http://en.wikipedia.org/w/index.php?search=Madagascar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Madagascar</span><br />Population : 29892792"
                    }
                },
                "MY": {
                    "value": 11146621,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malaysia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malaysia</span><br />Population : 11146621"
                    }
                },
                "MW": {
                    "value": 55890650,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malawi",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malawi</span><br />Population : 55890650"
                    }
                },
                "MV": {
                    "value": 1534982,
                    "href": "http://en.wikipedia.org/w/index.php?search=Maldives",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Maldives</span><br />Population : 1534982"
                    }
                },
                "ML": {
                    "value": 20906329,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mali",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mali</span><br />Population : 20906329"
                    }
                },
                "MT": {
                    "value": 8740969,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malta",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malta</span><br />Population : 8740969"
                    }
                },
                "MA": {
                    "value": 37018347,
                    "href": "http://en.wikipedia.org/w/index.php?search=Morocco",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Morocco</span><br />Population : 37018347"
                    }
                },
                "MU": {
                    "value": 29722787,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mauritius",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritius</span><br />Population : 29722787"
                    }
                },
                "MR": {
                    "value": 12270843,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mauritania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritania</span><br />Population : 12270843"
                    }
                },
                "MX": {
                    "value": 44591764,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mexico",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mexico</span><br />Population : 44591764"
                    }
                },
                "FM": {
                    "value": 54998584,
                    "href": "http://en.wikipedia.org/w/index.php?search=Micronesia, Federated States Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Micronesia, Federated States Of</span><br />Population : 54998584"
                    }
                },
                "MD": {
                    "value": 1637350,
                    "href": "http://en.wikipedia.org/w/index.php?search=Moldova, Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Moldova, Republic Of</span><br />Population : 1637350"
                    }
                },
                "MC": {
                    "value": 39551959,
                    "href": "http://en.wikipedia.org/w/index.php?search=Monaco",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Monaco</span><br />Population : 39551959"
                    }
                },
                "MN": {
                    "value": 41952127,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mongolia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mongolia</span><br />Population : 41952127"
                    }
                },
                "ME": {
                    "value": 10621985,
                    "href": "http://en.wikipedia.org/w/index.php?search=Montenegro",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Montenegro</span><br />Population : 10621985"
                    }
                },
                "MZ": {
                    "value": 5256796,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mozambique",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mozambique</span><br />Population : 5256796"
                    }
                },
                "NA": {
                    "value": 48465302,
                    "href": "http://en.wikipedia.org/w/index.php?search=Namibia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Namibia</span><br />Population : 48465302"
                    }
                },
                "NP": {
                    "value": 13925186,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nepal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nepal</span><br />Population : 13925186"
                    }
                },
                "NI": {
                    "value": 14329175,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nicaragua",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nicaragua</span><br />Population : 14329175"
                    }
                },
                "NE": {
                    "value": 38709250,
                    "href": "http://en.wikipedia.org/w/index.php?search=Niger",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Niger</span><br />Population : 38709250"
                    }
                },
                "NG": {
                    "value": 14676495,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nigeria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nigeria</span><br />Population : 14676495"
                    }
                },
                "NO": {
                    "value": 3564065,
                    "href": "http://en.wikipedia.org/w/index.php?search=Norway",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Norway</span><br />Population : 3564065"
                    }
                },
                "NZ": {
                    "value": 26810779,
                    "href": "http://en.wikipedia.org/w/index.php?search=New Zealand",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New Zealand</span><br />Population : 26810779"
                    }
                },
                "OM": {
                    "value": 10272836,
                    "href": "http://en.wikipedia.org/w/index.php?search=Oman",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Oman</span><br />Population : 10272836"
                    }
                },
                "UG": {
                    "value": 3701165,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uganda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uganda</span><br />Population : 3701165"
                    }
                },
                "UZ": {
                    "value": 23971890,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uzbekistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uzbekistan</span><br />Population : 23971890"
                    }
                },
                "PK": {
                    "value": 38707422,
                    "href": "http://en.wikipedia.org/w/index.php?search=Pakistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Pakistan</span><br />Population : 38707422"
                    }
                },
                "PS": {
                    "value": 37875681,
                    "href": "http://en.wikipedia.org/w/index.php?search=Palestine, State Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palestine, State Of</span><br />Population : 37875681"
                    }
                },
                "PA": {
                    "value": 51104938,
                    "href": "http://en.wikipedia.org/w/index.php?search=Panama",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Panama</span><br />Population : 51104938"
                    }
                },
                "PG": {
                    "value": 58301786,
                    "href": "http://en.wikipedia.org/w/index.php?search=Papua New Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Papua New Guinea</span><br />Population : 58301786"
                    }
                },
                "PY": {
                    "value": 10709729,
                    "href": "http://en.wikipedia.org/w/index.php?search=Paraguay",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paraguay</span><br />Population : 10709729"
                    }
                },
                "NL": {
                    "value": 29795908,
                    "href": "http://en.wikipedia.org/w/index.php?search=Netherlands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Netherlands</span><br />Population : 29795908"
                    }
                },
                "PE": {
                    "value": 42703436,
                    "href": "http://en.wikipedia.org/w/index.php?search=Peru",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Peru</span><br />Population : 42703436"
                    }
                },
                "PH": {
                    "value": 59756876,
                    "href": "http://en.wikipedia.org/w/index.php?search=Philippines",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Philippines</span><br />Population : 59756876"
                    }
                },
                "PL": {
                    "value": 53258326,
                    "href": "http://en.wikipedia.org/w/index.php?search=Poland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Poland</span><br />Population : 53258326"
                    }
                },
                "PT": {
                    "value": 44061643,
                    "href": "http://en.wikipedia.org/w/index.php?search=Portugal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Portugal</span><br />Population : 44061643"
                    }
                },
                "QA": {
                    "value": 14062286,
                    "href": "http://en.wikipedia.org/w/index.php?search=Qatar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Qatar</span><br />Population : 14062286"
                    }
                },
                "DO": {
                    "value": 11490286,
                    "href": "http://en.wikipedia.org/w/index.php?search=Dominican Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominican Republic</span><br />Population : 11490286"
                    }
                },
                "RO": {
                    "value": 7243835,
                    "href": "http://en.wikipedia.org/w/index.php?search=Romania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Romania</span><br />Population : 7243835"
                    }
                },
                "GB": {
                    "value": 48851010,
                    "href": "http://en.wikipedia.org/w/index.php?search=United Kingdom",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Kingdom</span><br />Population : 48851010"
                    }
                },
                "RU": {
                    "value": 30697113,
                    "href": "http://en.wikipedia.org/w/index.php?search=Russian Federation",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Russian Federation</span><br />Population : 30697113"
                    }
                },
                "RW": {
                    "value": 46405142,
                    "href": "http://en.wikipedia.org/w/index.php?search=Rwanda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Rwanda</span><br />Population : 46405142"
                    }
                },
                "KN": {
                    "value": 43006885,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Kitts And Nevis",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Kitts And Nevis</span><br />Population : 43006885"
                    }
                },
                "SM": {
                    "value": 42292136,
                    "href": "http://en.wikipedia.org/w/index.php?search=San Marino",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">San Marino</span><br />Population : 42292136"
                    }
                },
                "VC": {
                    "value": 8373541,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Vincent And The Grenadines",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Vincent And The Grenadines</span><br />Population : 8373541"
                    }
                },
                "LC": {
                    "value": 27854568,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Lucia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Lucia</span><br />Population : 27854568"
                    }
                },
                "SV": {
                    "value": 1438098,
                    "href": "http://en.wikipedia.org/w/index.php?search=El Salvador",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">El Salvador</span><br />Population : 1438098"
                    }
                },
                "WS": {
                    "value": 52463144,
                    "href": "http://en.wikipedia.org/w/index.php?search=Samoa",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Samoa</span><br />Population : 52463144"
                    }
                },
                "ST": {
                    "value": 12607196,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sao Tome And Principe",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sao Tome And Principe</span><br />Population : 12607196"
                    }
                },
                "SN": {
                    "value": 28841690,
                    "href": "http://en.wikipedia.org/w/index.php?search=Senegal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Senegal</span><br />Population : 28841690"
                    }
                },
                "RS": {
                    "value": 52878101,
                    "href": "http://en.wikipedia.org/w/index.php?search=Serbia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Serbia</span><br />Population : 52878101"
                    }
                },
                "SC": {
                    "value": 17592160,
                    "href": "http://en.wikipedia.org/w/index.php?search=Seychelles",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Seychelles</span><br />Population : 17592160"
                    }
                },
                "SL": {
                    "value": 19063702,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sierra Leone",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sierra Leone</span><br />Population : 19063702"
                    }
                },
                "SG": {
                    "value": 32519632,
                    "href": "http://en.wikipedia.org/w/index.php?search=Singapore",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Singapore</span><br />Population : 32519632"
                    }
                },
                "SK": {
                    "value": 38217517,
                    "href": "http://en.wikipedia.org/w/index.php?search=Slovakia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovakia</span><br />Population : 38217517"
                    }
                },
                "SI": {
                    "value": 25657309,
                    "href": "http://en.wikipedia.org/w/index.php?search=Slovenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovenia</span><br />Population : 25657309"
                    }
                },
                "SO": {
                    "value": 33358685,
                    "href": "http://en.wikipedia.org/w/index.php?search=Somalia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Somalia</span><br />Population : 33358685"
                    }
                },
                "SD": {
                    "value": 51991520,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sudan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sudan</span><br />Population : 51991520"
                    }
                },
                "SS": {
                    "value": 7996972,
                    "href": "http://en.wikipedia.org/w/index.php?search=South Sudan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Sudan</span><br />Population : 7996972"
                    }
                },
                "LK": {
                    "value": 14886715,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sri Lanka",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sri Lanka</span><br />Population : 14886715"
                    }
                },
                "SE": {
                    "value": 31157770,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sweden",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sweden</span><br />Population : 31157770"
                    }
                },
                "CH": {
                    "value": 10510476,
                    "href": "http://en.wikipedia.org/w/index.php?search=Switzerland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Switzerland</span><br />Population : 10510476"
                    }
                },
                "SR": {
                    "value": 42707092,
                    "href": "http://en.wikipedia.org/w/index.php?search=Suriname",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Suriname</span><br />Population : 42707092"
                    }
                },
                "SZ": {
                    "value": 13358505,
                    "href": "http://en.wikipedia.org/w/index.php?search=Swaziland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Swaziland</span><br />Population : 13358505"
                    }
                },
                "SY": {
                    "value": 18076581,
                    "href": "http://en.wikipedia.org/w/index.php?search=Syrian Arab Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Syrian Arab Republic</span><br />Population : 18076581"
                    }
                },
                "TJ": {
                    "value": 40979630,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tajikistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tajikistan</span><br />Population : 40979630"
                    }
                },
                "TZ": {
                    "value": 13188501,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tanzania, United Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tanzania, United Republic Of</span><br />Population : 13188501"
                    }
                },
                "TD": {
                    "value": 19200802,
                    "href": "http://en.wikipedia.org/w/index.php?search=Chad",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chad</span><br />Population : 19200802"
                    }
                },
                "CZ": {
                    "value": 29680743,
                    "href": "http://en.wikipedia.org/w/index.php?search=Czech Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Czech Republic</span><br />Population : 29680743"
                    }
                },
                "TH": {
                    "value": 6752102,
                    "href": "http://en.wikipedia.org/w/index.php?search=Thailand",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Thailand</span><br />Population : 6752102"
                    }
                },
                "TL": {
                    "value": 59831824,
                    "href": "http://en.wikipedia.org/w/index.php?search=Timor-leste",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Timor-leste</span><br />Population : 59831824"
                    }
                },
                "TG": {
                    "value": 591732,
                    "href": "http://en.wikipedia.org/w/index.php?search=Togo",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Togo</span><br />Population : 591732"
                    }
                },
                "TO": {
                    "value": 11685882,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tonga",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tonga</span><br />Population : 11685882"
                    }
                },
                "TT": {
                    "value": 40731021,
                    "href": "http://en.wikipedia.org/w/index.php?search=Trinidad And Tobago",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Trinidad And Tobago</span><br />Population : 40731021"
                    }
                },
                "TN": {
                    "value": 53477686,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tunisia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tunisia</span><br />Population : 53477686"
                    }
                },
                "TM": {
                    "value": 15559421,
                    "href": "http://en.wikipedia.org/w/index.php?search=Turkmenistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkmenistan</span><br />Population : 15559421"
                    }
                },
                "TR": {
                    "value": 59557624,
                    "href": "http://en.wikipedia.org/w/index.php?search=Turkey",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkey</span><br />Population : 59557624"
                    }
                },
                "TV": {
                    "value": 6269509,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tuvalu",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tuvalu</span><br />Population : 6269509"
                    }
                },
                "VU": {
                    "value": 14716711,
                    "href": "http://en.wikipedia.org/w/index.php?search=Vanuatu",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Vanuatu</span><br />Population : 14716711"
                    }
                },
                "VE": {
                    "value": 32281992,
                    "href": "http://en.wikipedia.org/w/index.php?search=Venezuela, Bolivarian Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Venezuela, Bolivarian Republic Of</span><br />Population : 32281992"
                    }
                },
                "VN": {
                    "value": 59111591,
                    "href": "http://en.wikipedia.org/w/index.php?search=Viet Nam",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Viet Nam</span><br />Population : 59111591"
                    }
                },
                "UA": {
                    "value": 36270694,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ukraine",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ukraine</span><br />Population : 36270694"
                    }
                },
                "UY": {
                    "value": 53989527,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uruguay",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uruguay</span><br />Population : 53989527"
                    }
                },
                "YE": {
                    "value": 48887571,
                    "href": "http://en.wikipedia.org/w/index.php?search=Yemen",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Yemen</span><br />Population : 48887571"
                    }
                },
                "ZM": {
                    "value": 45913410,
                    "href": "http://en.wikipedia.org/w/index.php?search=Zambia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zambia</span><br />Population : 45913410"
                    }
                },
                "ZW": {
                    "value": 53987699,
                    "href": "http://en.wikipedia.org/w/index.php?search=Zimbabwe",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zimbabwe</span><br />Population : 53987699"
                    }
                }
            },
            "plots": {
                "paris": {
                    "value": 382495,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paris</span><br />Population: 382495"
                    }
                },
                "newyork": {
                    "value": 881903,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New-York</span><br />Population: 881903"
                    }
                },
                "sydney": {
                    "value": 695496,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sydney</span><br />Population: 695496"
                    }
                },
                "brasilia": {
                    "value": 392706,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brasilia</span><br />Population: 392706"
                    }
                },
                "tokyo": {
                    "value": 1491797,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tokyo</span><br />Population: 1491797"
                    }
                }
            }
        },
        "2010": {
            "areas": {
                "AF": {
                    "value": 44310251,
                    "href": "http://en.wikipedia.org/w/index.php?search=Afghanistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Afghanistan</span><br />Population : 44310251"
                    }
                },
                "ZA": {
                    "value": 33673102,
                    "href": "http://en.wikipedia.org/w/index.php?search=South Africa",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Africa</span><br />Population : 33673102"
                    }
                },
                "AL": {
                    "value": 15131668,
                    "href": "http://en.wikipedia.org/w/index.php?search=Albania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Albania</span><br />Population : 15131668"
                    }
                },
                "DZ": {
                    "value": 37266956,
                    "href": "http://en.wikipedia.org/w/index.php?search=Algeria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Algeria</span><br />Population : 37266956"
                    }
                },
                "DE": {
                    "value": 49333603,
                    "href": "http://en.wikipedia.org/w/index.php?search=Germany",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Germany</span><br />Population : 49333603"
                    }
                },
                "AD": {
                    "value": 15912225,
                    "href": "http://en.wikipedia.org/w/index.php?search=Andorra",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Andorra</span><br />Population : 15912225"
                    }
                },
                "AO": {
                    "value": 14714883,
                    "href": "http://en.wikipedia.org/w/index.php?search=Angola",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Angola</span><br />Population : 14714883"
                    }
                },
                "AG": {
                    "value": 55481177,
                    "href": "http://en.wikipedia.org/w/index.php?search=Antigua And Barbuda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Antigua And Barbuda</span><br />Population : 55481177"
                    }
                },
                "SA": {
                    "value": 46752463,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saudi Arabia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saudi Arabia</span><br />Population : 46752463"
                    }
                },
                "AR": {
                    "value": 7861700,
                    "href": "http://en.wikipedia.org/w/index.php?search=Argentina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Argentina</span><br />Population : 7861700"
                    }
                },
                "AM": {
                    "value": 54426419,
                    "href": "http://en.wikipedia.org/w/index.php?search=Armenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Armenia</span><br />Population : 54426419"
                    }
                },
                "AU": {
                    "value": 15082312,
                    "href": "http://en.wikipedia.org/w/index.php?search=Australia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Australia</span><br />Population : 15082312"
                    }
                },
                "AT": {
                    "value": 4744955,
                    "href": "http://en.wikipedia.org/w/index.php?search=Austria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Austria</span><br />Population : 4744955"
                    }
                },
                "AZ": {
                    "value": 15137152,
                    "href": "http://en.wikipedia.org/w/index.php?search=Azerbaijan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Azerbaijan</span><br />Population : 15137152"
                    }
                },
                "BS": {
                    "value": 27569400,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bahamas",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahamas</span><br />Population : 27569400"
                    }
                },
                "BH": {
                    "value": 26510986,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bahrain",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahrain</span><br />Population : 26510986"
                    }
                },
                "BD": {
                    "value": 41239206,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bangladesh",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bangladesh</span><br />Population : 41239206"
                    }
                },
                "BB": {
                    "value": 13404205,
                    "href": "http://en.wikipedia.org/w/index.php?search=Barbados",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Barbados</span><br />Population : 13404205"
                    }
                },
                "BE": {
                    "value": 37096951,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belgium",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belgium</span><br />Population : 37096951"
                    }
                },
                "BZ": {
                    "value": 50457825,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belize",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belize</span><br />Population : 50457825"
                    }
                },
                "BJ": {
                    "value": 4613339,
                    "href": "http://en.wikipedia.org/w/index.php?search=Benin",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Benin</span><br />Population : 4613339"
                    }
                },
                "BT": {
                    "value": 8278485,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bhutan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bhutan</span><br />Population : 8278485"
                    }
                },
                "BY": {
                    "value": 36212198,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belarus",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belarus</span><br />Population : 36212198"
                    }
                },
                "MM": {
                    "value": 17663452,
                    "href": "http://en.wikipedia.org/w/index.php?search=Myanmar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Myanmar</span><br />Population : 17663452"
                    }
                },
                "BO": {
                    "value": 12795480,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bolivia, Plurinational State Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bolivia, Plurinational State Of</span><br />Population : 12795480"
                    }
                },
                "BA": {
                    "value": 35325617,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bosnia And Herzegovina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bosnia And Herzegovina</span><br />Population : 35325617"
                    }
                },
                "BW": {
                    "value": 8068264,
                    "href": "http://en.wikipedia.org/w/index.php?search=Botswana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Botswana</span><br />Population : 8068264"
                    }
                },
                "BR": {
                    "value": 8618493,
                    "href": "http://en.wikipedia.org/w/index.php?search=Brazil",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brazil</span><br />Population : 8618493"
                    }
                },
                "BN": {
                    "value": 33963754,
                    "href": "http://en.wikipedia.org/w/index.php?search=Brunei Darussalam",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brunei Darussalam</span><br />Population : 33963754"
                    }
                },
                "BG": {
                    "value": 40261225,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bulgaria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bulgaria</span><br />Population : 40261225"
                    }
                },
                "BF": {
                    "value": 25668277,
                    "href": "http://en.wikipedia.org/w/index.php?search=Burkina Faso",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burkina Faso</span><br />Population : 25668277"
                    }
                },
                "BI": {
                    "value": 13963574,
                    "href": "http://en.wikipedia.org/w/index.php?search=Burundi",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burundi</span><br />Population : 13963574"
                    }
                },
                "KH": {
                    "value": 6346286,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cambodia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cambodia</span><br />Population : 6346286"
                    }
                },
                "CM": {
                    "value": 58650934,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cameroon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cameroon</span><br />Population : 58650934"
                    }
                },
                "CA": {
                    "value": 12265359,
                    "href": "http://en.wikipedia.org/w/index.php?search=Canada",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Canada</span><br />Population : 12265359"
                    }
                },
                "CV": {
                    "value": 54289319,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cape Verde",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cape Verde</span><br />Population : 54289319"
                    }
                },
                "CF": {
                    "value": 17921200,
                    "href": "http://en.wikipedia.org/w/index.php?search=Central African Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Central African Republic</span><br />Population : 17921200"
                    }
                },
                "CL": {
                    "value": 36210370,
                    "href": "http://en.wikipedia.org/w/index.php?search=Chile",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chile</span><br />Population : 36210370"
                    }
                },
                "CN": {
                    "value": 40862638,
                    "href": "http://en.wikipedia.org/w/index.php?search=China",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">China</span><br />Population : 40862638"
                    }
                },
                "CY": {
                    "value": 436352,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cyprus",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cyprus</span><br />Population : 436352"
                    }
                },
                "CO": {
                    "value": 6916623,
                    "href": "http://en.wikipedia.org/w/index.php?search=Colombia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Colombia</span><br />Population : 6916623"
                    }
                },
                "KM": {
                    "value": 8505157,
                    "href": "http://en.wikipedia.org/w/index.php?search=Comoros",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Comoros</span><br />Population : 8505157"
                    }
                },
                "CG": {
                    "value": 34713236,
                    "href": "http://en.wikipedia.org/w/index.php?search=Congo",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo</span><br />Population : 34713236"
                    }
                },
                "CD": {
                    "value": 52695301,
                    "href": "http://en.wikipedia.org/w/index.php?search=Congo, The Democratic Republic Of The",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo, The Democratic Republic Of The</span><br />Population : 52695301"
                    }
                },
                "KP": {
                    "value": 1410678,
                    "href": "http://en.wikipedia.org/w/index.php?search=Korea, Democratic People's Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Democratic People's Republic Of</span><br />Population : 1410678"
                    }
                },
                "KR": {
                    "value": 41050922,
                    "href": "http://en.wikipedia.org/w/index.php?search=Korea, Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Republic Of</span><br />Population : 41050922"
                    }
                },
                "CR": {
                    "value": 6920279,
                    "href": "http://en.wikipedia.org/w/index.php?search=Costa Rica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Costa Rica</span><br />Population : 6920279"
                    }
                },
                "CI": {
                    "value": 22006787,
                    "href": "http://en.wikipedia.org/w/index.php?search=C\u00d4te D'ivoire",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">C\u00d4te D'ivoire</span><br />Population : 22006787"
                    }
                },
                "HR": {
                    "value": 59431492,
                    "href": "http://en.wikipedia.org/w/index.php?search=Croatia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Croatia</span><br />Population : 59431492"
                    }
                },
                "CU": {
                    "value": 49613288,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cuba",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cuba</span><br />Population : 49613288"
                    }
                },
                "DK": {
                    "value": 536892,
                    "href": "http://en.wikipedia.org/w/index.php?search=Denmark",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Denmark</span><br />Population : 536892"
                    }
                },
                "DJ": {
                    "value": 48761438,
                    "href": "http://en.wikipedia.org/w/index.php?search=Djibouti",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Djibouti</span><br />Population : 48761438"
                    }
                },
                "DM": {
                    "value": 29357187,
                    "href": "http://en.wikipedia.org/w/index.php?search=Dominica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominica</span><br />Population : 29357187"
                    }
                },
                "EG": {
                    "value": 39807880,
                    "href": "http://en.wikipedia.org/w/index.php?search=Egypt",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Egypt</span><br />Population : 39807880"
                    }
                },
                "AE": {
                    "value": 28666202,
                    "href": "http://en.wikipedia.org/w/index.php?search=United Arab Emirates",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Arab Emirates</span><br />Population : 28666202"
                    }
                },
                "EC": {
                    "value": 3799877,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ecuador",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ecuador</span><br />Population : 3799877"
                    }
                },
                "ER": {
                    "value": 29115890,
                    "href": "http://en.wikipedia.org/w/index.php?search=Eritrea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Eritrea</span><br />Population : 29115890"
                    }
                },
                "ES": {
                    "value": 47200324,
                    "href": "http://en.wikipedia.org/w/index.php?search=Spain",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Spain</span><br />Population : 47200324"
                    }
                },
                "EE": {
                    "value": 14561331,
                    "href": "http://en.wikipedia.org/w/index.php?search=Estonia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Estonia</span><br />Population : 14561331"
                    }
                },
                "US": {
                    "value": 27512732,
                    "href": "http://en.wikipedia.org/w/index.php?search=United States",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United States</span><br />Population : 27512732"
                    }
                },
                "ET": {
                    "value": 26885727,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ethiopia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ethiopia</span><br />Population : 26885727"
                    }
                },
                "FJ": {
                    "value": 17506244,
                    "href": "http://en.wikipedia.org/w/index.php?search=Fiji",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Fiji</span><br />Population : 17506244"
                    }
                },
                "FI": {
                    "value": 31225406,
                    "href": "http://en.wikipedia.org/w/index.php?search=Finland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Finland</span><br />Population : 31225406"
                    }
                },
                "FR": {
                    "value": 50640625,
                    "href": "http://en.wikipedia.org/w/index.php?search=France",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">France</span><br />Population : 50640625"
                    }
                },
                "GA": {
                    "value": 20794821,
                    "href": "http://en.wikipedia.org/w/index.php?search=Gabon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gabon</span><br />Population : 20794821"
                    }
                },
                "GM": {
                    "value": 46191266,
                    "href": "http://en.wikipedia.org/w/index.php?search=Gambia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gambia</span><br />Population : 46191266"
                    }
                },
                "GE": {
                    "value": 1911550,
                    "href": "http://en.wikipedia.org/w/index.php?search=Georgia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Georgia</span><br />Population : 1911550"
                    }
                },
                "GH": {
                    "value": 33874182,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ghana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ghana</span><br />Population : 33874182"
                    }
                },
                "GR": {
                    "value": 38921298,
                    "href": "http://en.wikipedia.org/w/index.php?search=Greece",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Greece</span><br />Population : 38921298"
                    }
                },
                "GD": {
                    "value": 19071014,
                    "href": "http://en.wikipedia.org/w/index.php?search=Grenada",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Grenada</span><br />Population : 19071014"
                    }
                },
                "GT": {
                    "value": 59522892,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guatemala",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guatemala</span><br />Population : 59522892"
                    }
                },
                "GN": {
                    "value": 27754028,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea</span><br />Population : 27754028"
                    }
                },
                "GQ": {
                    "value": 19493283,
                    "href": "http://en.wikipedia.org/w/index.php?search=Equatorial Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Equatorial Guinea</span><br />Population : 19493283"
                    }
                },
                "GW": {
                    "value": 31611115,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guinea-bissau",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea-bissau</span><br />Population : 31611115"
                    }
                },
                "GY": {
                    "value": 7512552,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guyana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guyana</span><br />Population : 7512552"
                    }
                },
                "HT": {
                    "value": 52870789,
                    "href": "http://en.wikipedia.org/w/index.php?search=Haiti",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Haiti</span><br />Population : 52870789"
                    }
                },
                "HN": {
                    "value": 50488901,
                    "href": "http://en.wikipedia.org/w/index.php?search=Honduras",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Honduras</span><br />Population : 50488901"
                    }
                },
                "HU": {
                    "value": 29527191,
                    "href": "http://en.wikipedia.org/w/index.php?search=Hungary",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Hungary</span><br />Population : 29527191"
                    }
                },
                "JM": {
                    "value": 38683658,
                    "href": "http://en.wikipedia.org/w/index.php?search=Jamaica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jamaica</span><br />Population : 38683658"
                    }
                },
                "JP": {
                    "value": 39965088,
                    "href": "http://en.wikipedia.org/w/index.php?search=Japan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Japan</span><br />Population : 39965088"
                    }
                },
                "MH": {
                    "value": 10236276,
                    "href": "http://en.wikipedia.org/w/index.php?search=Marshall Islands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Marshall Islands</span><br />Population : 10236276"
                    }
                },
                "PW": {
                    "value": 48384870,
                    "href": "http://en.wikipedia.org/w/index.php?search=Palau",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palau</span><br />Population : 48384870"
                    }
                },
                "SB": {
                    "value": 16389334,
                    "href": "http://en.wikipedia.org/w/index.php?search=Solomon Islands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Solomon Islands</span><br />Population : 16389334"
                    }
                },
                "IN": {
                    "value": 9627551,
                    "href": "http://en.wikipedia.org/w/index.php?search=India",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">India</span><br />Population : 9627551"
                    }
                },
                "ID": {
                    "value": 46613535,
                    "href": "http://en.wikipedia.org/w/index.php?search=Indonesia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Indonesia</span><br />Population : 46613535"
                    }
                },
                "JO": {
                    "value": 33899774,
                    "href": "http://en.wikipedia.org/w/index.php?search=Jordan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jordan</span><br />Population : 33899774"
                    }
                },
                "IR": {
                    "value": 13632705,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iran, Islamic Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iran, Islamic Republic Of</span><br />Population : 13632705"
                    }
                },
                "IQ": {
                    "value": 12398803,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iraq",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iraq</span><br />Population : 12398803"
                    }
                },
                "IE": {
                    "value": 37948801,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ireland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ireland</span><br />Population : 37948801"
                    }
                },
                "IS": {
                    "value": 21637530,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iceland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iceland</span><br />Population : 21637530"
                    }
                },
                "IL": {
                    "value": 13566897,
                    "href": "http://en.wikipedia.org/w/index.php?search=Israel",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Israel</span><br />Population : 13566897"
                    }
                },
                "IT": {
                    "value": 8969470,
                    "href": "http://en.wikipedia.org/w/index.php?search=Italy",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Italy</span><br />Population : 8969470"
                    }
                },
                "KZ": {
                    "value": 12320199,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kazakhstan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kazakhstan</span><br />Population : 12320199"
                    }
                },
                "KE": {
                    "value": 17213763,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kenya",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kenya</span><br />Population : 17213763"
                    }
                },
                "KG": {
                    "value": 29295035,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kyrgyzstan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kyrgyzstan</span><br />Population : 29295035"
                    }
                },
                "KI": {
                    "value": 49880176,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kiribati",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kiribati</span><br />Population : 49880176"
                    }
                },
                "KW": {
                    "value": 27755856,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kuwait",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kuwait</span><br />Population : 27755856"
                    }
                },
                "LA": {
                    "value": 56194098,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lao People's Democratic Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lao People's Democratic Republic</span><br />Population : 56194098"
                    }
                },
                "LS": {
                    "value": 43970243,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lesotho",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lesotho</span><br />Population : 43970243"
                    }
                },
                "LV": {
                    "value": 35921546,
                    "href": "http://en.wikipedia.org/w/index.php?search=Latvia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Latvia</span><br />Population : 35921546"
                    }
                },
                "LB": {
                    "value": 52433896,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lebanon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lebanon</span><br />Population : 52433896"
                    }
                },
                "LR": {
                    "value": 24394159,
                    "href": "http://en.wikipedia.org/w/index.php?search=Liberia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liberia</span><br />Population : 24394159"
                    }
                },
                "LY": {
                    "value": 10795645,
                    "href": "http://en.wikipedia.org/w/index.php?search=Libya",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Libya</span><br />Population : 10795645"
                    }
                },
                "LI": {
                    "value": 17634204,
                    "href": "http://en.wikipedia.org/w/index.php?search=Liechtenstein",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liechtenstein</span><br />Population : 17634204"
                    }
                },
                "LT": {
                    "value": 24582443,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lithuania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lithuania</span><br />Population : 24582443"
                    }
                },
                "LU": {
                    "value": 17279571,
                    "href": "http://en.wikipedia.org/w/index.php?search=Luxembourg",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Luxembourg</span><br />Population : 17279571"
                    }
                },
                "MK": {
                    "value": 32724368,
                    "href": "http://en.wikipedia.org/w/index.php?search=Macedonia, The Former Yugoslav Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Macedonia, The Former Yugoslav Republic Of</span><br />Population : 32724368"
                    }
                },
                "MG": {
                    "value": 15608777,
                    "href": "http://en.wikipedia.org/w/index.php?search=Madagascar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Madagascar</span><br />Population : 15608777"
                    }
                },
                "MY": {
                    "value": 32179623,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malaysia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malaysia</span><br />Population : 32179623"
                    }
                },
                "MW": {
                    "value": 40465961,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malawi",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malawi</span><br />Population : 40465961"
                    }
                },
                "MV": {
                    "value": 3059536,
                    "href": "http://en.wikipedia.org/w/index.php?search=Maldives",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Maldives</span><br />Population : 3059536"
                    }
                },
                "ML": {
                    "value": 20485889,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mali",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mali</span><br />Population : 20485889"
                    }
                },
                "MT": {
                    "value": 13453561,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malta",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malta</span><br />Population : 13453561"
                    }
                },
                "MA": {
                    "value": 9718951,
                    "href": "http://en.wikipedia.org/w/index.php?search=Morocco",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Morocco</span><br />Population : 9718951"
                    }
                },
                "MU": {
                    "value": 24754275,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mauritius",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritius</span><br />Population : 24754275"
                    }
                },
                "MR": {
                    "value": 52856165,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mauritania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritania</span><br />Population : 52856165"
                    }
                },
                "MX": {
                    "value": 56382383,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mexico",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mexico</span><br />Population : 56382383"
                    }
                },
                "FM": {
                    "value": 50454169,
                    "href": "http://en.wikipedia.org/w/index.php?search=Micronesia, Federated States Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Micronesia, Federated States Of</span><br />Population : 50454169"
                    }
                },
                "MD": {
                    "value": 51011710,
                    "href": "http://en.wikipedia.org/w/index.php?search=Moldova, Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Moldova, Republic Of</span><br />Population : 51011710"
                    }
                },
                "MC": {
                    "value": 43460230,
                    "href": "http://en.wikipedia.org/w/index.php?search=Monaco",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Monaco</span><br />Population : 43460230"
                    }
                },
                "MN": {
                    "value": 39294211,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mongolia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mongolia</span><br />Population : 39294211"
                    }
                },
                "ME": {
                    "value": 18537237,
                    "href": "http://en.wikipedia.org/w/index.php?search=Montenegro",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Montenegro</span><br />Population : 18537237"
                    }
                },
                "MZ": {
                    "value": 5084964,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mozambique",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mozambique</span><br />Population : 5084964"
                    }
                },
                "NA": {
                    "value": 12888708,
                    "href": "http://en.wikipedia.org/w/index.php?search=Namibia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Namibia</span><br />Population : 12888708"
                    }
                },
                "NP": {
                    "value": 50167173,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nepal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nepal</span><br />Population : 50167173"
                    }
                },
                "NI": {
                    "value": 39383783,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nicaragua",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nicaragua</span><br />Population : 39383783"
                    }
                },
                "NE": {
                    "value": 19877164,
                    "href": "http://en.wikipedia.org/w/index.php?search=Niger",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Niger</span><br />Population : 19877164"
                    }
                },
                "NG": {
                    "value": 11682226,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nigeria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nigeria</span><br />Population : 11682226"
                    }
                },
                "NO": {
                    "value": 27229391,
                    "href": "http://en.wikipedia.org/w/index.php?search=Norway",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Norway</span><br />Population : 27229391"
                    }
                },
                "NZ": {
                    "value": 28759430,
                    "href": "http://en.wikipedia.org/w/index.php?search=New Zealand",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New Zealand</span><br />Population : 28759430"
                    }
                },
                "OM": {
                    "value": 18641434,
                    "href": "http://en.wikipedia.org/w/index.php?search=Oman",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Oman</span><br />Population : 18641434"
                    }
                },
                "UG": {
                    "value": 531408,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uganda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uganda</span><br />Population : 531408"
                    }
                },
                "UZ": {
                    "value": 58458994,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uzbekistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uzbekistan</span><br />Population : 58458994"
                    }
                },
                "PK": {
                    "value": 52179804,
                    "href": "http://en.wikipedia.org/w/index.php?search=Pakistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Pakistan</span><br />Population : 52179804"
                    }
                },
                "PS": {
                    "value": 14480899,
                    "href": "http://en.wikipedia.org/w/index.php?search=Palestine, State Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palestine, State Of</span><br />Population : 14480899"
                    }
                },
                "PA": {
                    "value": 29976880,
                    "href": "http://en.wikipedia.org/w/index.php?search=Panama",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Panama</span><br />Population : 29976880"
                    }
                },
                "PG": {
                    "value": 22184103,
                    "href": "http://en.wikipedia.org/w/index.php?search=Papua New Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Papua New Guinea</span><br />Population : 22184103"
                    }
                },
                "PY": {
                    "value": 25410528,
                    "href": "http://en.wikipedia.org/w/index.php?search=Paraguay",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paraguay</span><br />Population : 25410528"
                    }
                },
                "NL": {
                    "value": 50448685,
                    "href": "http://en.wikipedia.org/w/index.php?search=Netherlands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Netherlands</span><br />Population : 50448685"
                    }
                },
                "PE": {
                    "value": 809265,
                    "href": "http://en.wikipedia.org/w/index.php?search=Peru",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Peru</span><br />Population : 809265"
                    }
                },
                "PH": {
                    "value": 6382846,
                    "href": "http://en.wikipedia.org/w/index.php?search=Philippines",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Philippines</span><br />Population : 6382846"
                    }
                },
                "PL": {
                    "value": 13967230,
                    "href": "http://en.wikipedia.org/w/index.php?search=Poland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Poland</span><br />Population : 13967230"
                    }
                },
                "PT": {
                    "value": 19847915,
                    "href": "http://en.wikipedia.org/w/index.php?search=Portugal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Portugal</span><br />Population : 19847915"
                    }
                },
                "QA": {
                    "value": 23469189,
                    "href": "http://en.wikipedia.org/w/index.php?search=Qatar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Qatar</span><br />Population : 23469189"
                    }
                },
                "DO": {
                    "value": 9183346,
                    "href": "http://en.wikipedia.org/w/index.php?search=Dominican Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominican Republic</span><br />Population : 9183346"
                    }
                },
                "RO": {
                    "value": 53415534,
                    "href": "http://en.wikipedia.org/w/index.php?search=Romania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Romania</span><br />Population : 53415534"
                    }
                },
                "GB": {
                    "value": 25631717,
                    "href": "http://en.wikipedia.org/w/index.php?search=United Kingdom",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Kingdom</span><br />Population : 25631717"
                    }
                },
                "RU": {
                    "value": 58647278,
                    "href": "http://en.wikipedia.org/w/index.php?search=Russian Federation",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Russian Federation</span><br />Population : 58647278"
                    }
                },
                "RW": {
                    "value": 58663730,
                    "href": "http://en.wikipedia.org/w/index.php?search=Rwanda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Rwanda</span><br />Population : 58663730"
                    }
                },
                "KN": {
                    "value": 29571063,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Kitts And Nevis",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Kitts And Nevis</span><br />Population : 29571063"
                    }
                },
                "SM": {
                    "value": 21003213,
                    "href": "http://en.wikipedia.org/w/index.php?search=San Marino",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">San Marino</span><br />Population : 21003213"
                    }
                },
                "VC": {
                    "value": 37084155,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Vincent And The Grenadines",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Vincent And The Grenadines</span><br />Population : 37084155"
                    }
                },
                "LC": {
                    "value": 33152121,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Lucia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Lucia</span><br />Population : 33152121"
                    }
                },
                "SV": {
                    "value": 37899445,
                    "href": "http://en.wikipedia.org/w/index.php?search=El Salvador",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">El Salvador</span><br />Population : 37899445"
                    }
                },
                "WS": {
                    "value": 49015531,
                    "href": "http://en.wikipedia.org/w/index.php?search=Samoa",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Samoa</span><br />Population : 49015531"
                    }
                },
                "ST": {
                    "value": 39270447,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sao Tome And Principe",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sao Tome And Principe</span><br />Population : 39270447"
                    }
                },
                "SN": {
                    "value": 20626645,
                    "href": "http://en.wikipedia.org/w/index.php?search=Senegal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Senegal</span><br />Population : 20626645"
                    }
                },
                "RS": {
                    "value": 24116302,
                    "href": "http://en.wikipedia.org/w/index.php?search=Serbia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Serbia</span><br />Population : 24116302"
                    }
                },
                "SC": {
                    "value": 2971792,
                    "href": "http://en.wikipedia.org/w/index.php?search=Seychelles",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Seychelles</span><br />Population : 2971792"
                    }
                },
                "SL": {
                    "value": 55846778,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sierra Leone",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sierra Leone</span><br />Population : 55846778"
                    }
                },
                "SG": {
                    "value": 19215426,
                    "href": "http://en.wikipedia.org/w/index.php?search=Singapore",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Singapore</span><br />Population : 19215426"
                    }
                },
                "SK": {
                    "value": 23787262,
                    "href": "http://en.wikipedia.org/w/index.php?search=Slovakia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovakia</span><br />Population : 23787262"
                    }
                },
                "SI": {
                    "value": 45725125,
                    "href": "http://en.wikipedia.org/w/index.php?search=Slovenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovenia</span><br />Population : 45725125"
                    }
                },
                "SO": {
                    "value": 47503772,
                    "href": "http://en.wikipedia.org/w/index.php?search=Somalia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Somalia</span><br />Population : 47503772"
                    }
                },
                "SD": {
                    "value": 56996592,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sudan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sudan</span><br />Population : 56996592"
                    }
                },
                "SS": {
                    "value": 42527948,
                    "href": "http://en.wikipedia.org/w/index.php?search=South Sudan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Sudan</span><br />Population : 42527948"
                    }
                },
                "LK": {
                    "value": 10678653,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sri Lanka",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sri Lanka</span><br />Population : 10678653"
                    }
                },
                "SE": {
                    "value": 4882055,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sweden",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sweden</span><br />Population : 4882055"
                    }
                },
                "CH": {
                    "value": 12298263,
                    "href": "http://en.wikipedia.org/w/index.php?search=Switzerland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Switzerland</span><br />Population : 12298263"
                    }
                },
                "SR": {
                    "value": 56003986,
                    "href": "http://en.wikipedia.org/w/index.php?search=Suriname",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Suriname</span><br />Population : 56003986"
                    }
                },
                "SZ": {
                    "value": 785501,
                    "href": "http://en.wikipedia.org/w/index.php?search=Swaziland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Swaziland</span><br />Population : 785501"
                    }
                },
                "SY": {
                    "value": 8472253,
                    "href": "http://en.wikipedia.org/w/index.php?search=Syrian Arab Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Syrian Arab Republic</span><br />Population : 8472253"
                    }
                },
                "TJ": {
                    "value": 32998569,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tajikistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tajikistan</span><br />Population : 32998569"
                    }
                },
                "TZ": {
                    "value": 9930999,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tanzania, United Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tanzania, United Republic Of</span><br />Population : 9930999"
                    }
                },
                "TD": {
                    "value": 29148795,
                    "href": "http://en.wikipedia.org/w/index.php?search=Chad",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chad</span><br />Population : 29148795"
                    }
                },
                "CZ": {
                    "value": 48914991,
                    "href": "http://en.wikipedia.org/w/index.php?search=Czech Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Czech Republic</span><br />Population : 48914991"
                    }
                },
                "TH": {
                    "value": 57325632,
                    "href": "http://en.wikipedia.org/w/index.php?search=Thailand",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Thailand</span><br />Population : 57325632"
                    }
                },
                "TL": {
                    "value": 59674616,
                    "href": "http://en.wikipedia.org/w/index.php?search=Timor-leste",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Timor-leste</span><br />Population : 59674616"
                    }
                },
                "TG": {
                    "value": 19021658,
                    "href": "http://en.wikipedia.org/w/index.php?search=Togo",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Togo</span><br />Population : 19021658"
                    }
                },
                "TO": {
                    "value": 27000891,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tonga",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tonga</span><br />Population : 27000891"
                    }
                },
                "TT": {
                    "value": 53457578,
                    "href": "http://en.wikipedia.org/w/index.php?search=Trinidad And Tobago",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Trinidad And Tobago</span><br />Population : 53457578"
                    }
                },
                "TN": {
                    "value": 31150458,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tunisia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tunisia</span><br />Population : 31150458"
                    }
                },
                "TM": {
                    "value": 43407218,
                    "href": "http://en.wikipedia.org/w/index.php?search=Turkmenistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkmenistan</span><br />Population : 43407218"
                    }
                },
                "TR": {
                    "value": 53170581,
                    "href": "http://en.wikipedia.org/w/index.php?search=Turkey",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkey</span><br />Population : 53170581"
                    }
                },
                "TV": {
                    "value": 19522531,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tuvalu",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tuvalu</span><br />Population : 19522531"
                    }
                },
                "VU": {
                    "value": 19824151,
                    "href": "http://en.wikipedia.org/w/index.php?search=Vanuatu",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Vanuatu</span><br />Population : 19824151"
                    }
                },
                "VE": {
                    "value": 25558597,
                    "href": "http://en.wikipedia.org/w/index.php?search=Venezuela, Bolivarian Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Venezuela, Bolivarian Republic Of</span><br />Population : 25558597"
                    }
                },
                "VN": {
                    "value": 28214685,
                    "href": "http://en.wikipedia.org/w/index.php?search=Viet Nam",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Viet Nam</span><br />Population : 28214685"
                    }
                },
                "UA": {
                    "value": 43498618,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ukraine",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ukraine</span><br />Population : 43498618"
                    }
                },
                "UY": {
                    "value": 31311322,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uruguay",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uruguay</span><br />Population : 31311322"
                    }
                },
                "YE": {
                    "value": 38478922,
                    "href": "http://en.wikipedia.org/w/index.php?search=Yemen",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Yemen</span><br />Population : 38478922"
                    }
                },
                "ZM": {
                    "value": 2673828,
                    "href": "http://en.wikipedia.org/w/index.php?search=Zambia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zambia</span><br />Population : 2673828"
                    }
                },
                "ZW": {
                    "value": 3713961,
                    "href": "http://en.wikipedia.org/w/index.php?search=Zimbabwe",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zimbabwe</span><br />Population : 3713961"
                    }
                }
            },
            "plots": {
                "paris": {
                    "value": 1062415,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paris</span><br />Population: 1062415"
                    }
                },
                "newyork": {
                    "value": 224371,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New-York</span><br />Population: 224371"
                    }
                },
                "sydney": {
                    "value": 1430787,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sydney</span><br />Population: 1430787"
                    }
                },
                "brasilia": {
                    "value": 1220624,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brasilia</span><br />Population: 1220624"
                    }
                },
                "tokyo": {
                    "value": 1391053,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tokyo</span><br />Population: 1391053"
                    }
                }
            }
        },
        "2011": {
            "areas": {
                "AF": {
                    "value": 59288907,
                    "href": "http://en.wikipedia.org/w/index.php?search=Afghanistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Afghanistan</span><br />Population : 59288907"
                    }
                },
                "ZA": {
                    "value": 2249731,
                    "href": "http://en.wikipedia.org/w/index.php?search=South Africa",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Africa</span><br />Population : 2249731"
                    }
                },
                "AL": {
                    "value": 54824924,
                    "href": "http://en.wikipedia.org/w/index.php?search=Albania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Albania</span><br />Population : 54824924"
                    }
                },
                "DZ": {
                    "value": 49159943,
                    "href": "http://en.wikipedia.org/w/index.php?search=Algeria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Algeria</span><br />Population : 49159943"
                    }
                },
                "DE": {
                    "value": 3534817,
                    "href": "http://en.wikipedia.org/w/index.php?search=Germany",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Germany</span><br />Population : 3534817"
                    }
                },
                "AD": {
                    "value": 38597742,
                    "href": "http://en.wikipedia.org/w/index.php?search=Andorra",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Andorra</span><br />Population : 38597742"
                    }
                },
                "AO": {
                    "value": 52126792,
                    "href": "http://en.wikipedia.org/w/index.php?search=Angola",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Angola</span><br />Population : 52126792"
                    }
                },
                "AG": {
                    "value": 28357269,
                    "href": "http://en.wikipedia.org/w/index.php?search=Antigua And Barbuda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Antigua And Barbuda</span><br />Population : 28357269"
                    }
                },
                "SA": {
                    "value": 30962173,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saudi Arabia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saudi Arabia</span><br />Population : 30962173"
                    }
                },
                "AR": {
                    "value": 36923291,
                    "href": "http://en.wikipedia.org/w/index.php?search=Argentina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Argentina</span><br />Population : 36923291"
                    }
                },
                "AM": {
                    "value": 38080417,
                    "href": "http://en.wikipedia.org/w/index.php?search=Armenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Armenia</span><br />Population : 38080417"
                    }
                },
                "AU": {
                    "value": 28496197,
                    "href": "http://en.wikipedia.org/w/index.php?search=Australia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Australia</span><br />Population : 28496197"
                    }
                },
                "AT": {
                    "value": 4924099,
                    "href": "http://en.wikipedia.org/w/index.php?search=Austria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Austria</span><br />Population : 4924099"
                    }
                },
                "AZ": {
                    "value": 17817004,
                    "href": "http://en.wikipedia.org/w/index.php?search=Azerbaijan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Azerbaijan</span><br />Population : 17817004"
                    }
                },
                "BS": {
                    "value": 40763925,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bahamas",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahamas</span><br />Population : 40763925"
                    }
                },
                "BH": {
                    "value": 55192353,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bahrain",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahrain</span><br />Population : 55192353"
                    }
                },
                "BD": {
                    "value": 58323722,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bangladesh",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bangladesh</span><br />Population : 58323722"
                    }
                },
                "BB": {
                    "value": 31819507,
                    "href": "http://en.wikipedia.org/w/index.php?search=Barbados",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Barbados</span><br />Population : 31819507"
                    }
                },
                "BE": {
                    "value": 58305442,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belgium",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belgium</span><br />Population : 58305442"
                    }
                },
                "BZ": {
                    "value": 24211359,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belize",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belize</span><br />Population : 24211359"
                    }
                },
                "BJ": {
                    "value": 54514164,
                    "href": "http://en.wikipedia.org/w/index.php?search=Benin",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Benin</span><br />Population : 54514164"
                    }
                },
                "BT": {
                    "value": 39621423,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bhutan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bhutan</span><br />Population : 39621423"
                    }
                },
                "BY": {
                    "value": 58883091,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belarus",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belarus</span><br />Population : 58883091"
                    }
                },
                "MM": {
                    "value": 1068841,
                    "href": "http://en.wikipedia.org/w/index.php?search=Myanmar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Myanmar</span><br />Population : 1068841"
                    }
                },
                "BO": {
                    "value": 6598550,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bolivia, Plurinational State Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bolivia, Plurinational State Of</span><br />Population : 6598550"
                    }
                },
                "BA": {
                    "value": 31863379,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bosnia And Herzegovina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bosnia And Herzegovina</span><br />Population : 31863379"
                    }
                },
                "BW": {
                    "value": 40624997,
                    "href": "http://en.wikipedia.org/w/index.php?search=Botswana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Botswana</span><br />Population : 40624997"
                    }
                },
                "BR": {
                    "value": 21330426,
                    "href": "http://en.wikipedia.org/w/index.php?search=Brazil",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brazil</span><br />Population : 21330426"
                    }
                },
                "BN": {
                    "value": 17530008,
                    "href": "http://en.wikipedia.org/w/index.php?search=Brunei Darussalam",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brunei Darussalam</span><br />Population : 17530008"
                    }
                },
                "BG": {
                    "value": 29135999,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bulgaria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bulgaria</span><br />Population : 29135999"
                    }
                },
                "BF": {
                    "value": 31609287,
                    "href": "http://en.wikipedia.org/w/index.php?search=Burkina Faso",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burkina Faso</span><br />Population : 31609287"
                    }
                },
                "BI": {
                    "value": 30711737,
                    "href": "http://en.wikipedia.org/w/index.php?search=Burundi",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burundi</span><br />Population : 30711737"
                    }
                },
                "KH": {
                    "value": 40511661,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cambodia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cambodia</span><br />Population : 40511661"
                    }
                },
                "CM": {
                    "value": 22079907,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cameroon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cameroon</span><br />Population : 22079907"
                    }
                },
                "CA": {
                    "value": 29964084,
                    "href": "http://en.wikipedia.org/w/index.php?search=Canada",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Canada</span><br />Population : 29964084"
                    }
                },
                "CV": {
                    "value": 4878399,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cape Verde",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cape Verde</span><br />Population : 4878399"
                    }
                },
                "CF": {
                    "value": 58696634,
                    "href": "http://en.wikipedia.org/w/index.php?search=Central African Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Central African Republic</span><br />Population : 58696634"
                    }
                },
                "CL": {
                    "value": 31285730,
                    "href": "http://en.wikipedia.org/w/index.php?search=Chile",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chile</span><br />Population : 31285730"
                    }
                },
                "CN": {
                    "value": 3867514,
                    "href": "http://en.wikipedia.org/w/index.php?search=China",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">China</span><br />Population : 3867514"
                    }
                },
                "CY": {
                    "value": 9346038,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cyprus",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cyprus</span><br />Population : 9346038"
                    }
                },
                "CO": {
                    "value": 25288052,
                    "href": "http://en.wikipedia.org/w/index.php?search=Colombia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Colombia</span><br />Population : 25288052"
                    }
                },
                "KM": {
                    "value": 47394092,
                    "href": "http://en.wikipedia.org/w/index.php?search=Comoros",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Comoros</span><br />Population : 47394092"
                    }
                },
                "CG": {
                    "value": 11347702,
                    "href": "http://en.wikipedia.org/w/index.php?search=Congo",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo</span><br />Population : 11347702"
                    }
                },
                "CD": {
                    "value": 19780279,
                    "href": "http://en.wikipedia.org/w/index.php?search=Congo, The Democratic Republic Of The",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo, The Democratic Republic Of The</span><br />Population : 19780279"
                    }
                },
                "KP": {
                    "value": 43239041,
                    "href": "http://en.wikipedia.org/w/index.php?search=Korea, Democratic People's Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Democratic People's Republic Of</span><br />Population : 43239041"
                    }
                },
                "KR": {
                    "value": 31095618,
                    "href": "http://en.wikipedia.org/w/index.php?search=Korea, Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Republic Of</span><br />Population : 31095618"
                    }
                },
                "CR": {
                    "value": 20582773,
                    "href": "http://en.wikipedia.org/w/index.php?search=Costa Rica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Costa Rica</span><br />Population : 20582773"
                    }
                },
                "CI": {
                    "value": 41796747,
                    "href": "http://en.wikipedia.org/w/index.php?search=C\u00d4te D'ivoire",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">C\u00d4te D'ivoire</span><br />Population : 41796747"
                    }
                },
                "HR": {
                    "value": 5852725,
                    "href": "http://en.wikipedia.org/w/index.php?search=Croatia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Croatia</span><br />Population : 5852725"
                    }
                },
                "CU": {
                    "value": 32930933,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cuba",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cuba</span><br />Population : 32930933"
                    }
                },
                "DK": {
                    "value": 29700851,
                    "href": "http://en.wikipedia.org/w/index.php?search=Denmark",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Denmark</span><br />Population : 29700851"
                    }
                },
                "DJ": {
                    "value": 51061066,
                    "href": "http://en.wikipedia.org/w/index.php?search=Djibouti",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Djibouti</span><br />Population : 51061066"
                    }
                },
                "DM": {
                    "value": 16082229,
                    "href": "http://en.wikipedia.org/w/index.php?search=Dominica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominica</span><br />Population : 16082229"
                    }
                },
                "EG": {
                    "value": 13590661,
                    "href": "http://en.wikipedia.org/w/index.php?search=Egypt",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Egypt</span><br />Population : 13590661"
                    }
                },
                "AE": {
                    "value": 6880062,
                    "href": "http://en.wikipedia.org/w/index.php?search=United Arab Emirates",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Arab Emirates</span><br />Population : 6880062"
                    }
                },
                "EC": {
                    "value": 53188861,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ecuador",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ecuador</span><br />Population : 53188861"
                    }
                },
                "ER": {
                    "value": 27130679,
                    "href": "http://en.wikipedia.org/w/index.php?search=Eritrea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Eritrea</span><br />Population : 27130679"
                    }
                },
                "ES": {
                    "value": 23615430,
                    "href": "http://en.wikipedia.org/w/index.php?search=Spain",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Spain</span><br />Population : 23615430"
                    }
                },
                "EE": {
                    "value": 10148532,
                    "href": "http://en.wikipedia.org/w/index.php?search=Estonia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Estonia</span><br />Population : 10148532"
                    }
                },
                "US": {
                    "value": 23845758,
                    "href": "http://en.wikipedia.org/w/index.php?search=United States",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United States</span><br />Population : 23845758"
                    }
                },
                "ET": {
                    "value": 22151199,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ethiopia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ethiopia</span><br />Population : 22151199"
                    }
                },
                "FJ": {
                    "value": 23695862,
                    "href": "http://en.wikipedia.org/w/index.php?search=Fiji",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Fiji</span><br />Population : 23695862"
                    }
                },
                "FI": {
                    "value": 7684384,
                    "href": "http://en.wikipedia.org/w/index.php?search=Finland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Finland</span><br />Population : 7684384"
                    }
                },
                "FR": {
                    "value": 28547382,
                    "href": "http://en.wikipedia.org/w/index.php?search=France",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">France</span><br />Population : 28547382"
                    }
                },
                "GA": {
                    "value": 14246914,
                    "href": "http://en.wikipedia.org/w/index.php?search=Gabon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gabon</span><br />Population : 14246914"
                    }
                },
                "GM": {
                    "value": 4472583,
                    "href": "http://en.wikipedia.org/w/index.php?search=Gambia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gambia</span><br />Population : 4472583"
                    }
                },
                "GE": {
                    "value": 57515744,
                    "href": "http://en.wikipedia.org/w/index.php?search=Georgia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Georgia</span><br />Population : 57515744"
                    }
                },
                "GH": {
                    "value": 42959357,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ghana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ghana</span><br />Population : 42959357"
                    }
                },
                "GR": {
                    "value": 46470951,
                    "href": "http://en.wikipedia.org/w/index.php?search=Greece",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Greece</span><br />Population : 46470951"
                    }
                },
                "GD": {
                    "value": 46436219,
                    "href": "http://en.wikipedia.org/w/index.php?search=Grenada",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Grenada</span><br />Population : 46436219"
                    }
                },
                "GT": {
                    "value": 8020736,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guatemala",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guatemala</span><br />Population : 8020736"
                    }
                },
                "GN": {
                    "value": 12797308,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea</span><br />Population : 12797308"
                    }
                },
                "GQ": {
                    "value": 12126431,
                    "href": "http://en.wikipedia.org/w/index.php?search=Equatorial Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Equatorial Guinea</span><br />Population : 12126431"
                    }
                },
                "GW": {
                    "value": 20427392,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guinea-bissau",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea-bissau</span><br />Population : 20427392"
                    }
                },
                "GY": {
                    "value": 37027487,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guyana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guyana</span><br />Population : 37027487"
                    }
                },
                "HT": {
                    "value": 33526862,
                    "href": "http://en.wikipedia.org/w/index.php?search=Haiti",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Haiti</span><br />Population : 33526862"
                    }
                },
                "HN": {
                    "value": 14166482,
                    "href": "http://en.wikipedia.org/w/index.php?search=Honduras",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Honduras</span><br />Population : 14166482"
                    }
                },
                "HU": {
                    "value": 6936731,
                    "href": "http://en.wikipedia.org/w/index.php?search=Hungary",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Hungary</span><br />Population : 6936731"
                    }
                },
                "JM": {
                    "value": 52814121,
                    "href": "http://en.wikipedia.org/w/index.php?search=Jamaica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jamaica</span><br />Population : 52814121"
                    }
                },
                "JP": {
                    "value": 50863642,
                    "href": "http://en.wikipedia.org/w/index.php?search=Japan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Japan</span><br />Population : 50863642"
                    }
                },
                "MH": {
                    "value": 5794229,
                    "href": "http://en.wikipedia.org/w/index.php?search=Marshall Islands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Marshall Islands</span><br />Population : 5794229"
                    }
                },
                "PW": {
                    "value": 56504859,
                    "href": "http://en.wikipedia.org/w/index.php?search=Palau",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palau</span><br />Population : 56504859"
                    }
                },
                "SB": {
                    "value": 53508762,
                    "href": "http://en.wikipedia.org/w/index.php?search=Solomon Islands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Solomon Islands</span><br />Population : 53508762"
                    }
                },
                "IN": {
                    "value": 40473273,
                    "href": "http://en.wikipedia.org/w/index.php?search=India",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">India</span><br />Population : 40473273"
                    }
                },
                "ID": {
                    "value": 30062796,
                    "href": "http://en.wikipedia.org/w/index.php?search=Indonesia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Indonesia</span><br />Population : 30062796"
                    }
                },
                "JO": {
                    "value": 10022400,
                    "href": "http://en.wikipedia.org/w/index.php?search=Jordan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jordan</span><br />Population : 10022400"
                    }
                },
                "IR": {
                    "value": 7289535,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iran, Islamic Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iran, Islamic Republic Of</span><br />Population : 7289535"
                    }
                },
                "IQ": {
                    "value": 7971380,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iraq",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iraq</span><br />Population : 7971380"
                    }
                },
                "IE": {
                    "value": 40175308,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ireland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ireland</span><br />Population : 40175308"
                    }
                },
                "IS": {
                    "value": 37829981,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iceland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iceland</span><br />Population : 37829981"
                    }
                },
                "IL": {
                    "value": 32084567,
                    "href": "http://en.wikipedia.org/w/index.php?search=Israel",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Israel</span><br />Population : 32084567"
                    }
                },
                "IT": {
                    "value": 48823590,
                    "href": "http://en.wikipedia.org/w/index.php?search=Italy",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Italy</span><br />Population : 48823590"
                    }
                },
                "KZ": {
                    "value": 19284891,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kazakhstan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kazakhstan</span><br />Population : 19284891"
                    }
                },
                "KE": {
                    "value": 40718225,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kenya",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kenya</span><br />Population : 40718225"
                    }
                },
                "KG": {
                    "value": 36171982,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kyrgyzstan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kyrgyzstan</span><br />Population : 36171982"
                    }
                },
                "KI": {
                    "value": 48845526,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kiribati",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kiribati</span><br />Population : 48845526"
                    }
                },
                "KW": {
                    "value": 40394669,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kuwait",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kuwait</span><br />Population : 40394669"
                    }
                },
                "LA": {
                    "value": 9327758,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lao People's Democratic Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lao People's Democratic Republic</span><br />Population : 9327758"
                    }
                },
                "LS": {
                    "value": 17679904,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lesotho",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lesotho</span><br />Population : 17679904"
                    }
                },
                "LV": {
                    "value": 43602814,
                    "href": "http://en.wikipedia.org/w/index.php?search=Latvia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Latvia</span><br />Population : 43602814"
                    }
                },
                "LB": {
                    "value": 26757767,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lebanon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lebanon</span><br />Population : 26757767"
                    }
                },
                "LR": {
                    "value": 24149206,
                    "href": "http://en.wikipedia.org/w/index.php?search=Liberia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liberia</span><br />Population : 24149206"
                    }
                },
                "LY": {
                    "value": 4686459,
                    "href": "http://en.wikipedia.org/w/index.php?search=Libya",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Libya</span><br />Population : 4686459"
                    }
                },
                "LI": {
                    "value": 38711078,
                    "href": "http://en.wikipedia.org/w/index.php?search=Liechtenstein",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liechtenstein</span><br />Population : 38711078"
                    }
                },
                "LT": {
                    "value": 51377311,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lithuania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lithuania</span><br />Population : 51377311"
                    }
                },
                "LU": {
                    "value": 15923193,
                    "href": "http://en.wikipedia.org/w/index.php?search=Luxembourg",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Luxembourg</span><br />Population : 15923193"
                    }
                },
                "MK": {
                    "value": 55219773,
                    "href": "http://en.wikipedia.org/w/index.php?search=Macedonia, The Former Yugoslav Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Macedonia, The Former Yugoslav Republic Of</span><br />Population : 55219773"
                    }
                },
                "MG": {
                    "value": 9835943,
                    "href": "http://en.wikipedia.org/w/index.php?search=Madagascar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Madagascar</span><br />Population : 9835943"
                    }
                },
                "MY": {
                    "value": 37506424,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malaysia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malaysia</span><br />Population : 37506424"
                    }
                },
                "MW": {
                    "value": 5240344,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malawi",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malawi</span><br />Population : 5240344"
                    }
                },
                "MV": {
                    "value": 17657968,
                    "href": "http://en.wikipedia.org/w/index.php?search=Maldives",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Maldives</span><br />Population : 17657968"
                    }
                },
                "ML": {
                    "value": 22493036,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mali",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mali</span><br />Population : 22493036"
                    }
                },
                "MT": {
                    "value": 58148234,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malta",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malta</span><br />Population : 58148234"
                    }
                },
                "MA": {
                    "value": 42641284,
                    "href": "http://en.wikipedia.org/w/index.php?search=Morocco",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Morocco</span><br />Population : 42641284"
                    }
                },
                "MU": {
                    "value": 9929171,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mauritius",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritius</span><br />Population : 9929171"
                    }
                },
                "MR": {
                    "value": 52347980,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mauritania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritania</span><br />Population : 52347980"
                    }
                },
                "MX": {
                    "value": 36555863,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mexico",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mexico</span><br />Population : 36555863"
                    }
                },
                "FM": {
                    "value": 28916638,
                    "href": "http://en.wikipedia.org/w/index.php?search=Micronesia, Federated States Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Micronesia, Federated States Of</span><br />Population : 28916638"
                    }
                },
                "MD": {
                    "value": 211508,
                    "href": "http://en.wikipedia.org/w/index.php?search=Moldova, Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Moldova, Republic Of</span><br />Population : 211508"
                    }
                },
                "MC": {
                    "value": 45116400,
                    "href": "http://en.wikipedia.org/w/index.php?search=Monaco",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Monaco</span><br />Population : 45116400"
                    }
                },
                "MN": {
                    "value": 45732437,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mongolia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mongolia</span><br />Population : 45732437"
                    }
                },
                "ME": {
                    "value": 14607031,
                    "href": "http://en.wikipedia.org/w/index.php?search=Montenegro",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Montenegro</span><br />Population : 14607031"
                    }
                },
                "MZ": {
                    "value": 46533103,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mozambique",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mozambique</span><br />Population : 46533103"
                    }
                },
                "NA": {
                    "value": 36363922,
                    "href": "http://en.wikipedia.org/w/index.php?search=Namibia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Namibia</span><br />Population : 36363922"
                    }
                },
                "NP": {
                    "value": 8931082,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nepal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nepal</span><br />Population : 8931082"
                    }
                },
                "NI": {
                    "value": 20303088,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nicaragua",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nicaragua</span><br />Population : 20303088"
                    }
                },
                "NE": {
                    "value": 57172080,
                    "href": "http://en.wikipedia.org/w/index.php?search=Niger",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Niger</span><br />Population : 57172080"
                    }
                },
                "NG": {
                    "value": 31706171,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nigeria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nigeria</span><br />Population : 31706171"
                    }
                },
                "NO": {
                    "value": 59054923,
                    "href": "http://en.wikipedia.org/w/index.php?search=Norway",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Norway</span><br />Population : 59054923"
                    }
                },
                "NZ": {
                    "value": 36645435,
                    "href": "http://en.wikipedia.org/w/index.php?search=New Zealand",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New Zealand</span><br />Population : 36645435"
                    }
                },
                "OM": {
                    "value": 30256564,
                    "href": "http://en.wikipedia.org/w/index.php?search=Oman",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Oman</span><br />Population : 30256564"
                    }
                },
                "UG": {
                    "value": 6808770,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uganda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uganda</span><br />Population : 6808770"
                    }
                },
                "UZ": {
                    "value": 59457084,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uzbekistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uzbekistan</span><br />Population : 59457084"
                    }
                },
                "PK": {
                    "value": 24324695,
                    "href": "http://en.wikipedia.org/w/index.php?search=Pakistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Pakistan</span><br />Population : 24324695"
                    }
                },
                "PS": {
                    "value": 53764682,
                    "href": "http://en.wikipedia.org/w/index.php?search=Palestine, State Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palestine, State Of</span><br />Population : 53764682"
                    }
                },
                "PA": {
                    "value": 27187347,
                    "href": "http://en.wikipedia.org/w/index.php?search=Panama",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Panama</span><br />Population : 27187347"
                    }
                },
                "PG": {
                    "value": 23240689,
                    "href": "http://en.wikipedia.org/w/index.php?search=Papua New Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Papua New Guinea</span><br />Population : 23240689"
                    }
                },
                "PY": {
                    "value": 33881494,
                    "href": "http://en.wikipedia.org/w/index.php?search=Paraguay",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paraguay</span><br />Population : 33881494"
                    }
                },
                "NL": {
                    "value": 6024557,
                    "href": "http://en.wikipedia.org/w/index.php?search=Netherlands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Netherlands</span><br />Population : 6024557"
                    }
                },
                "PE": {
                    "value": 8607525,
                    "href": "http://en.wikipedia.org/w/index.php?search=Peru",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Peru</span><br />Population : 8607525"
                    }
                },
                "PH": {
                    "value": 53358866,
                    "href": "http://en.wikipedia.org/w/index.php?search=Philippines",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Philippines</span><br />Population : 53358866"
                    }
                },
                "PL": {
                    "value": 26006457,
                    "href": "http://en.wikipedia.org/w/index.php?search=Poland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Poland</span><br />Population : 26006457"
                    }
                },
                "PT": {
                    "value": 34914316,
                    "href": "http://en.wikipedia.org/w/index.php?search=Portugal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Portugal</span><br />Population : 34914316"
                    }
                },
                "QA": {
                    "value": 16584930,
                    "href": "http://en.wikipedia.org/w/index.php?search=Qatar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Qatar</span><br />Population : 16584930"
                    }
                },
                "DO": {
                    "value": 43114737,
                    "href": "http://en.wikipedia.org/w/index.php?search=Dominican Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominican Republic</span><br />Population : 43114737"
                    }
                },
                "RO": {
                    "value": 51240210,
                    "href": "http://en.wikipedia.org/w/index.php?search=Romania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Romania</span><br />Population : 51240210"
                    }
                },
                "GB": {
                    "value": 18762082,
                    "href": "http://en.wikipedia.org/w/index.php?search=United Kingdom",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Kingdom</span><br />Population : 18762082"
                    }
                },
                "RU": {
                    "value": 26785187,
                    "href": "http://en.wikipedia.org/w/index.php?search=Russian Federation",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Russian Federation</span><br />Population : 26785187"
                    }
                },
                "RW": {
                    "value": 35561429,
                    "href": "http://en.wikipedia.org/w/index.php?search=Rwanda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Rwanda</span><br />Population : 35561429"
                    }
                },
                "KN": {
                    "value": 10373376,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Kitts And Nevis",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Kitts And Nevis</span><br />Population : 10373376"
                    }
                },
                "SM": {
                    "value": 45545981,
                    "href": "http://en.wikipedia.org/w/index.php?search=San Marino",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">San Marino</span><br />Population : 45545981"
                    }
                },
                "VC": {
                    "value": 44823920,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Vincent And The Grenadines",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Vincent And The Grenadines</span><br />Population : 44823920"
                    }
                },
                "LC": {
                    "value": 43802066,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Lucia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Lucia</span><br />Population : 43802066"
                    }
                },
                "SV": {
                    "value": 13846582,
                    "href": "http://en.wikipedia.org/w/index.php?search=El Salvador",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">El Salvador</span><br />Population : 13846582"
                    }
                },
                "WS": {
                    "value": 53494138,
                    "href": "http://en.wikipedia.org/w/index.php?search=Samoa",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Samoa</span><br />Population : 53494138"
                    }
                },
                "ST": {
                    "value": 46366754,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sao Tome And Principe",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sao Tome And Principe</span><br />Population : 46366754"
                    }
                },
                "SN": {
                    "value": 50989774,
                    "href": "http://en.wikipedia.org/w/index.php?search=Senegal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Senegal</span><br />Population : 50989774"
                    }
                },
                "RS": {
                    "value": 22350452,
                    "href": "http://en.wikipedia.org/w/index.php?search=Serbia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Serbia</span><br />Population : 22350452"
                    }
                },
                "SC": {
                    "value": 10784677,
                    "href": "http://en.wikipedia.org/w/index.php?search=Seychelles",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Seychelles</span><br />Population : 10784677"
                    }
                },
                "SL": {
                    "value": 37029315,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sierra Leone",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sierra Leone</span><br />Population : 37029315"
                    }
                },
                "SG": {
                    "value": 10327676,
                    "href": "http://en.wikipedia.org/w/index.php?search=Singapore",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Singapore</span><br />Population : 10327676"
                    }
                },
                "SK": {
                    "value": 26525610,
                    "href": "http://en.wikipedia.org/w/index.php?search=Slovakia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovakia</span><br />Population : 26525610"
                    }
                },
                "SI": {
                    "value": 35345725,
                    "href": "http://en.wikipedia.org/w/index.php?search=Slovenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovenia</span><br />Population : 35345725"
                    }
                },
                "SO": {
                    "value": 52377228,
                    "href": "http://en.wikipedia.org/w/index.php?search=Somalia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Somalia</span><br />Population : 52377228"
                    }
                },
                "SD": {
                    "value": 24768899,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sudan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sudan</span><br />Population : 24768899"
                    }
                },
                "SS": {
                    "value": 46962683,
                    "href": "http://en.wikipedia.org/w/index.php?search=South Sudan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Sudan</span><br />Population : 46962683"
                    }
                },
                "LK": {
                    "value": 35455405,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sri Lanka",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sri Lanka</span><br />Population : 35455405"
                    }
                },
                "SE": {
                    "value": 38126117,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sweden",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sweden</span><br />Population : 38126117"
                    }
                },
                "CH": {
                    "value": 47516568,
                    "href": "http://en.wikipedia.org/w/index.php?search=Switzerland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Switzerland</span><br />Population : 47516568"
                    }
                },
                "SR": {
                    "value": 14402295,
                    "href": "http://en.wikipedia.org/w/index.php?search=Suriname",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Suriname</span><br />Population : 14402295"
                    }
                },
                "SZ": {
                    "value": 9241842,
                    "href": "http://en.wikipedia.org/w/index.php?search=Swaziland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Swaziland</span><br />Population : 9241842"
                    }
                },
                "SY": {
                    "value": 29841608,
                    "href": "http://en.wikipedia.org/w/index.php?search=Syrian Arab Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Syrian Arab Republic</span><br />Population : 29841608"
                    }
                },
                "TJ": {
                    "value": 1823806,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tajikistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tajikistan</span><br />Population : 1823806"
                    }
                },
                "TZ": {
                    "value": 9335070,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tanzania, United Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tanzania, United Republic Of</span><br />Population : 9335070"
                    }
                },
                "TD": {
                    "value": 44683164,
                    "href": "http://en.wikipedia.org/w/index.php?search=Chad",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chad</span><br />Population : 44683164"
                    }
                },
                "CZ": {
                    "value": 33139325,
                    "href": "http://en.wikipedia.org/w/index.php?search=Czech Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Czech Republic</span><br />Population : 33139325"
                    }
                },
                "TH": {
                    "value": 20593741,
                    "href": "http://en.wikipedia.org/w/index.php?search=Thailand",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Thailand</span><br />Population : 20593741"
                    }
                },
                "TL": {
                    "value": 22401636,
                    "href": "http://en.wikipedia.org/w/index.php?search=Timor-leste",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Timor-leste</span><br />Population : 22401636"
                    }
                },
                "TG": {
                    "value": 20107492,
                    "href": "http://en.wikipedia.org/w/index.php?search=Togo",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Togo</span><br />Population : 20107492"
                    }
                },
                "TO": {
                    "value": 23684894,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tonga",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tonga</span><br />Population : 23684894"
                    }
                },
                "TT": {
                    "value": 27079495,
                    "href": "http://en.wikipedia.org/w/index.php?search=Trinidad And Tobago",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Trinidad And Tobago</span><br />Population : 27079495"
                    }
                },
                "TN": {
                    "value": 14292614,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tunisia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tunisia</span><br />Population : 14292614"
                    }
                },
                "TM": {
                    "value": 23492953,
                    "href": "http://en.wikipedia.org/w/index.php?search=Turkmenistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkmenistan</span><br />Population : 23492953"
                    }
                },
                "TR": {
                    "value": 7093939,
                    "href": "http://en.wikipedia.org/w/index.php?search=Turkey",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkey</span><br />Population : 7093939"
                    }
                },
                "TV": {
                    "value": 34384195,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tuvalu",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tuvalu</span><br />Population : 34384195"
                    }
                },
                "VU": {
                    "value": 35548633,
                    "href": "http://en.wikipedia.org/w/index.php?search=Vanuatu",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Vanuatu</span><br />Population : 35548633"
                    }
                },
                "VE": {
                    "value": 52967673,
                    "href": "http://en.wikipedia.org/w/index.php?search=Venezuela, Bolivarian Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Venezuela, Bolivarian Republic Of</span><br />Population : 52967673"
                    }
                },
                "VN": {
                    "value": 18932086,
                    "href": "http://en.wikipedia.org/w/index.php?search=Viet Nam",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Viet Nam</span><br />Population : 18932086"
                    }
                },
                "UA": {
                    "value": 25660965,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ukraine",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ukraine</span><br />Population : 25660965"
                    }
                },
                "UY": {
                    "value": 46860315,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uruguay",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uruguay</span><br />Population : 46860315"
                    }
                },
                "YE": {
                    "value": 16809775,
                    "href": "http://en.wikipedia.org/w/index.php?search=Yemen",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Yemen</span><br />Population : 16809775"
                    }
                },
                "ZM": {
                    "value": 4914959,
                    "href": "http://en.wikipedia.org/w/index.php?search=Zambia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zambia</span><br />Population : 4914959"
                    }
                },
                "ZW": {
                    "value": 14012930,
                    "href": "http://en.wikipedia.org/w/index.php?search=Zimbabwe",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zimbabwe</span><br />Population : 14012930"
                    }
                }
            },
            "plots": {
                "paris": {
                    "value": 1006104,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paris</span><br />Population: 1006104"
                    }
                },
                "newyork": {
                    "value": 867719,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New-York</span><br />Population: 867719"
                    }
                },
                "sydney": {
                    "value": 111877,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sydney</span><br />Population: 111877"
                    }
                },
                "brasilia": {
                    "value": 1090827,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brasilia</span><br />Population: 1090827"
                    }
                },
                "tokyo": {
                    "value": 849390,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tokyo</span><br />Population: 849390"
                    }
                }
            }
        },
        "2012": {
            "areas": {
                "AF": {
                    "value": 9658627,
                    "href": "http://en.wikipedia.org/w/index.php?search=Afghanistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Afghanistan</span><br />Population : 9658627"
                    }
                },
                "ZA": {
                    "value": 11627386,
                    "href": "http://en.wikipedia.org/w/index.php?search=South Africa",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Africa</span><br />Population : 11627386"
                    }
                },
                "AL": {
                    "value": 4404946,
                    "href": "http://en.wikipedia.org/w/index.php?search=Albania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Albania</span><br />Population : 4404946"
                    }
                },
                "DZ": {
                    "value": 17385595,
                    "href": "http://en.wikipedia.org/w/index.php?search=Algeria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Algeria</span><br />Population : 17385595"
                    }
                },
                "DE": {
                    "value": 4971627,
                    "href": "http://en.wikipedia.org/w/index.php?search=Germany",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Germany</span><br />Population : 4971627"
                    }
                },
                "AD": {
                    "value": 13638189,
                    "href": "http://en.wikipedia.org/w/index.php?search=Andorra",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Andorra</span><br />Population : 13638189"
                    }
                },
                "AO": {
                    "value": 2701248,
                    "href": "http://en.wikipedia.org/w/index.php?search=Angola",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Angola</span><br />Population : 2701248"
                    }
                },
                "AG": {
                    "value": 15126184,
                    "href": "http://en.wikipedia.org/w/index.php?search=Antigua And Barbuda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Antigua And Barbuda</span><br />Population : 15126184"
                    }
                },
                "SA": {
                    "value": 46964511,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saudi Arabia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saudi Arabia</span><br />Population : 46964511"
                    }
                },
                "AR": {
                    "value": 12256219,
                    "href": "http://en.wikipedia.org/w/index.php?search=Argentina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Argentina</span><br />Population : 12256219"
                    }
                },
                "AM": {
                    "value": 50485245,
                    "href": "http://en.wikipedia.org/w/index.php?search=Armenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Armenia</span><br />Population : 50485245"
                    }
                },
                "AU": {
                    "value": 16025561,
                    "href": "http://en.wikipedia.org/w/index.php?search=Australia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Australia</span><br />Population : 16025561"
                    }
                },
                "AT": {
                    "value": 13965402,
                    "href": "http://en.wikipedia.org/w/index.php?search=Austria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Austria</span><br />Population : 13965402"
                    }
                },
                "AZ": {
                    "value": 43047101,
                    "href": "http://en.wikipedia.org/w/index.php?search=Azerbaijan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Azerbaijan</span><br />Population : 43047101"
                    }
                },
                "BS": {
                    "value": 11110061,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bahamas",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahamas</span><br />Population : 11110061"
                    }
                },
                "BH": {
                    "value": 40674353,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bahrain",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahrain</span><br />Population : 40674353"
                    }
                },
                "BD": {
                    "value": 53852427,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bangladesh",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bangladesh</span><br />Population : 53852427"
                    }
                },
                "BB": {
                    "value": 51726459,
                    "href": "http://en.wikipedia.org/w/index.php?search=Barbados",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Barbados</span><br />Population : 51726459"
                    }
                },
                "BE": {
                    "value": 17478824,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belgium",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belgium</span><br />Population : 17478824"
                    }
                },
                "BZ": {
                    "value": 19813183,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belize",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belize</span><br />Population : 19813183"
                    }
                },
                "BJ": {
                    "value": 44953708,
                    "href": "http://en.wikipedia.org/w/index.php?search=Benin",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Benin</span><br />Population : 44953708"
                    }
                },
                "BT": {
                    "value": 13959918,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bhutan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bhutan</span><br />Population : 13959918"
                    }
                },
                "BY": {
                    "value": 52744657,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belarus",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belarus</span><br />Population : 52744657"
                    }
                },
                "MM": {
                    "value": 33932678,
                    "href": "http://en.wikipedia.org/w/index.php?search=Myanmar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Myanmar</span><br />Population : 33932678"
                    }
                },
                "BO": {
                    "value": 15347372,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bolivia, Plurinational State Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bolivia, Plurinational State Of</span><br />Population : 15347372"
                    }
                },
                "BA": {
                    "value": 55163105,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bosnia And Herzegovina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bosnia And Herzegovina</span><br />Population : 55163105"
                    }
                },
                "BW": {
                    "value": 10210684,
                    "href": "http://en.wikipedia.org/w/index.php?search=Botswana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Botswana</span><br />Population : 10210684"
                    }
                },
                "BR": {
                    "value": 13773462,
                    "href": "http://en.wikipedia.org/w/index.php?search=Brazil",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brazil</span><br />Population : 13773462"
                    }
                },
                "BN": {
                    "value": 23061545,
                    "href": "http://en.wikipedia.org/w/index.php?search=Brunei Darussalam",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brunei Darussalam</span><br />Population : 23061545"
                    }
                },
                "BG": {
                    "value": 31201642,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bulgaria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bulgaria</span><br />Population : 31201642"
                    }
                },
                "BF": {
                    "value": 52730033,
                    "href": "http://en.wikipedia.org/w/index.php?search=Burkina Faso",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burkina Faso</span><br />Population : 52730033"
                    }
                },
                "BI": {
                    "value": 39826160,
                    "href": "http://en.wikipedia.org/w/index.php?search=Burundi",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burundi</span><br />Population : 39826160"
                    }
                },
                "KH": {
                    "value": 36274350,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cambodia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cambodia</span><br />Population : 36274350"
                    }
                },
                "CM": {
                    "value": 7591156,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cameroon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cameroon</span><br />Population : 7591156"
                    }
                },
                "CA": {
                    "value": 13705826,
                    "href": "http://en.wikipedia.org/w/index.php?search=Canada",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Canada</span><br />Population : 13705826"
                    }
                },
                "CV": {
                    "value": 42831397,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cape Verde",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cape Verde</span><br />Population : 42831397"
                    }
                },
                "CF": {
                    "value": 53113913,
                    "href": "http://en.wikipedia.org/w/index.php?search=Central African Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Central African Republic</span><br />Population : 53113913"
                    }
                },
                "CL": {
                    "value": 19897272,
                    "href": "http://en.wikipedia.org/w/index.php?search=Chile",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chile</span><br />Population : 19897272"
                    }
                },
                "CN": {
                    "value": 55991190,
                    "href": "http://en.wikipedia.org/w/index.php?search=China",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">China</span><br />Population : 55991190"
                    }
                },
                "CY": {
                    "value": 43379798,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cyprus",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cyprus</span><br />Population : 43379798"
                    }
                },
                "CO": {
                    "value": 41758359,
                    "href": "http://en.wikipedia.org/w/index.php?search=Colombia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Colombia</span><br />Population : 41758359"
                    }
                },
                "KM": {
                    "value": 13835614,
                    "href": "http://en.wikipedia.org/w/index.php?search=Comoros",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Comoros</span><br />Population : 13835614"
                    }
                },
                "CG": {
                    "value": 12989248,
                    "href": "http://en.wikipedia.org/w/index.php?search=Congo",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo</span><br />Population : 12989248"
                    }
                },
                "CD": {
                    "value": 32111987,
                    "href": "http://en.wikipedia.org/w/index.php?search=Congo, The Democratic Republic Of The",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo, The Democratic Republic Of The</span><br />Population : 32111987"
                    }
                },
                "KP": {
                    "value": 335812,
                    "href": "http://en.wikipedia.org/w/index.php?search=Korea, Democratic People's Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Democratic People's Republic Of</span><br />Population : 335812"
                    }
                },
                "KR": {
                    "value": 24971808,
                    "href": "http://en.wikipedia.org/w/index.php?search=Korea, Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Republic Of</span><br />Population : 24971808"
                    }
                },
                "CR": {
                    "value": 47553128,
                    "href": "http://en.wikipedia.org/w/index.php?search=Costa Rica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Costa Rica</span><br />Population : 47553128"
                    }
                },
                "CI": {
                    "value": 29618591,
                    "href": "http://en.wikipedia.org/w/index.php?search=C\u00d4te D'ivoire",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">C\u00d4te D'ivoire</span><br />Population : 29618591"
                    }
                },
                "HR": {
                    "value": 16824399,
                    "href": "http://en.wikipedia.org/w/index.php?search=Croatia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Croatia</span><br />Population : 16824399"
                    }
                },
                "CU": {
                    "value": 58921479,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cuba",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cuba</span><br />Population : 58921479"
                    }
                },
                "DK": {
                    "value": 52985953,
                    "href": "http://en.wikipedia.org/w/index.php?search=Denmark",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Denmark</span><br />Population : 52985953"
                    }
                },
                "DJ": {
                    "value": 26540234,
                    "href": "http://en.wikipedia.org/w/index.php?search=Djibouti",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Djibouti</span><br />Population : 26540234"
                    }
                },
                "DM": {
                    "value": 29452243,
                    "href": "http://en.wikipedia.org/w/index.php?search=Dominica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominica</span><br />Population : 29452243"
                    }
                },
                "EG": {
                    "value": 31450250,
                    "href": "http://en.wikipedia.org/w/index.php?search=Egypt",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Egypt</span><br />Population : 31450250"
                    }
                },
                "AE": {
                    "value": 12440847,
                    "href": "http://en.wikipedia.org/w/index.php?search=United Arab Emirates",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Arab Emirates</span><br />Population : 12440847"
                    }
                },
                "EC": {
                    "value": 43467542,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ecuador",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ecuador</span><br />Population : 43467542"
                    }
                },
                "ER": {
                    "value": 6397470,
                    "href": "http://en.wikipedia.org/w/index.php?search=Eritrea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Eritrea</span><br />Population : 6397470"
                    }
                },
                "ES": {
                    "value": 8073748,
                    "href": "http://en.wikipedia.org/w/index.php?search=Spain",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Spain</span><br />Population : 8073748"
                    }
                },
                "EE": {
                    "value": 58820939,
                    "href": "http://en.wikipedia.org/w/index.php?search=Estonia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Estonia</span><br />Population : 58820939"
                    }
                },
                "US": {
                    "value": 11141137,
                    "href": "http://en.wikipedia.org/w/index.php?search=United States",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United States</span><br />Population : 11141137"
                    }
                },
                "ET": {
                    "value": 5688205,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ethiopia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ethiopia</span><br />Population : 5688205"
                    }
                },
                "FJ": {
                    "value": 24357599,
                    "href": "http://en.wikipedia.org/w/index.php?search=Fiji",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Fiji</span><br />Population : 24357599"
                    }
                },
                "FI": {
                    "value": 55479349,
                    "href": "http://en.wikipedia.org/w/index.php?search=Finland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Finland</span><br />Population : 55479349"
                    }
                },
                "FR": {
                    "value": 10051648,
                    "href": "http://en.wikipedia.org/w/index.php?search=France",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">France</span><br />Population : 10051648"
                    }
                },
                "GA": {
                    "value": 55402573,
                    "href": "http://en.wikipedia.org/w/index.php?search=Gabon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gabon</span><br />Population : 55402573"
                    }
                },
                "GM": {
                    "value": 26017425,
                    "href": "http://en.wikipedia.org/w/index.php?search=Gambia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gambia</span><br />Population : 26017425"
                    }
                },
                "GE": {
                    "value": 15519204,
                    "href": "http://en.wikipedia.org/w/index.php?search=Georgia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Georgia</span><br />Population : 15519204"
                    }
                },
                "GH": {
                    "value": 30839697,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ghana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ghana</span><br />Population : 30839697"
                    }
                },
                "GR": {
                    "value": 33868698,
                    "href": "http://en.wikipedia.org/w/index.php?search=Greece",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Greece</span><br />Population : 33868698"
                    }
                },
                "GD": {
                    "value": 48618854,
                    "href": "http://en.wikipedia.org/w/index.php?search=Grenada",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Grenada</span><br />Population : 48618854"
                    }
                },
                "GT": {
                    "value": 41893631,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guatemala",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guatemala</span><br />Population : 41893631"
                    }
                },
                "GN": {
                    "value": 34195911,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea</span><br />Population : 34195911"
                    }
                },
                "GQ": {
                    "value": 29064706,
                    "href": "http://en.wikipedia.org/w/index.php?search=Equatorial Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Equatorial Guinea</span><br />Population : 29064706"
                    }
                },
                "GW": {
                    "value": 37877509,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guinea-bissau",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea-bissau</span><br />Population : 37877509"
                    }
                },
                "GY": {
                    "value": 27905753,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guyana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guyana</span><br />Population : 27905753"
                    }
                },
                "HT": {
                    "value": 10760913,
                    "href": "http://en.wikipedia.org/w/index.php?search=Haiti",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Haiti</span><br />Population : 10760913"
                    }
                },
                "HN": {
                    "value": 39118723,
                    "href": "http://en.wikipedia.org/w/index.php?search=Honduras",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Honduras</span><br />Population : 39118723"
                    }
                },
                "HU": {
                    "value": 29359015,
                    "href": "http://en.wikipedia.org/w/index.php?search=Hungary",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Hungary</span><br />Population : 29359015"
                    }
                },
                "JM": {
                    "value": 16608694,
                    "href": "http://en.wikipedia.org/w/index.php?search=Jamaica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jamaica</span><br />Population : 16608694"
                    }
                },
                "JP": {
                    "value": 41025330,
                    "href": "http://en.wikipedia.org/w/index.php?search=Japan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Japan</span><br />Population : 41025330"
                    }
                },
                "MH": {
                    "value": 32208871,
                    "href": "http://en.wikipedia.org/w/index.php?search=Marshall Islands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Marshall Islands</span><br />Population : 32208871"
                    }
                },
                "PW": {
                    "value": 28678998,
                    "href": "http://en.wikipedia.org/w/index.php?search=Palau",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palau</span><br />Population : 28678998"
                    }
                },
                "SB": {
                    "value": 21105582,
                    "href": "http://en.wikipedia.org/w/index.php?search=Solomon Islands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Solomon Islands</span><br />Population : 21105582"
                    }
                },
                "IN": {
                    "value": 55729786,
                    "href": "http://en.wikipedia.org/w/index.php?search=India",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">India</span><br />Population : 55729786"
                    }
                },
                "ID": {
                    "value": 6463278,
                    "href": "http://en.wikipedia.org/w/index.php?search=Indonesia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Indonesia</span><br />Population : 6463278"
                    }
                },
                "JO": {
                    "value": 11503082,
                    "href": "http://en.wikipedia.org/w/index.php?search=Jordan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jordan</span><br />Population : 11503082"
                    }
                },
                "IR": {
                    "value": 24549539,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iran, Islamic Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iran, Islamic Republic Of</span><br />Population : 24549539"
                    }
                },
                "IQ": {
                    "value": 15564905,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iraq",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iraq</span><br />Population : 15564905"
                    }
                },
                "IE": {
                    "value": 49860068,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ireland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ireland</span><br />Population : 49860068"
                    }
                },
                "IS": {
                    "value": 43346894,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iceland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iceland</span><br />Population : 43346894"
                    }
                },
                "IL": {
                    "value": 40043692,
                    "href": "http://en.wikipedia.org/w/index.php?search=Israel",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Israel</span><br />Population : 40043692"
                    }
                },
                "IT": {
                    "value": 30971313,
                    "href": "http://en.wikipedia.org/w/index.php?search=Italy",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Italy</span><br />Population : 30971313"
                    }
                },
                "KZ": {
                    "value": 40727365,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kazakhstan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kazakhstan</span><br />Population : 40727365"
                    }
                },
                "KE": {
                    "value": 39976056,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kenya",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kenya</span><br />Population : 39976056"
                    }
                },
                "KG": {
                    "value": 50741166,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kyrgyzstan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kyrgyzstan</span><br />Population : 50741166"
                    }
                },
                "KI": {
                    "value": 2739636,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kiribati",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kiribati</span><br />Population : 2739636"
                    }
                },
                "KW": {
                    "value": 7143295,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kuwait",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kuwait</span><br />Population : 7143295"
                    }
                },
                "LA": {
                    "value": 7006195,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lao People's Democratic Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lao People's Democratic Republic</span><br />Population : 7006195"
                    }
                },
                "LS": {
                    "value": 9845083,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lesotho",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lesotho</span><br />Population : 9845083"
                    }
                },
                "LV": {
                    "value": 41310498,
                    "href": "http://en.wikipedia.org/w/index.php?search=Latvia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Latvia</span><br />Population : 41310498"
                    }
                },
                "LB": {
                    "value": 7135983,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lebanon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lebanon</span><br />Population : 7135983"
                    }
                },
                "LR": {
                    "value": 39902936,
                    "href": "http://en.wikipedia.org/w/index.php?search=Liberia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liberia</span><br />Population : 39902936"
                    }
                },
                "LY": {
                    "value": 20308572,
                    "href": "http://en.wikipedia.org/w/index.php?search=Libya",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Libya</span><br />Population : 20308572"
                    }
                },
                "LI": {
                    "value": 47474524,
                    "href": "http://en.wikipedia.org/w/index.php?search=Liechtenstein",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liechtenstein</span><br />Population : 47474524"
                    }
                },
                "LT": {
                    "value": 8883554,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lithuania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lithuania</span><br />Population : 8883554"
                    }
                },
                "LU": {
                    "value": 24481903,
                    "href": "http://en.wikipedia.org/w/index.php?search=Luxembourg",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Luxembourg</span><br />Population : 24481903"
                    }
                },
                "MK": {
                    "value": 35334757,
                    "href": "http://en.wikipedia.org/w/index.php?search=Macedonia, The Former Yugoslav Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Macedonia, The Former Yugoslav Republic Of</span><br />Population : 35334757"
                    }
                },
                "MG": {
                    "value": 11872339,
                    "href": "http://en.wikipedia.org/w/index.php?search=Madagascar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Madagascar</span><br />Population : 11872339"
                    }
                },
                "MY": {
                    "value": 10514132,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malaysia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malaysia</span><br />Population : 10514132"
                    }
                },
                "MW": {
                    "value": 56208722,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malawi",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malawi</span><br />Population : 56208722"
                    }
                },
                "MV": {
                    "value": 38076761,
                    "href": "http://en.wikipedia.org/w/index.php?search=Maldives",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Maldives</span><br />Population : 38076761"
                    }
                },
                "ML": {
                    "value": 14994568,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mali",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mali</span><br />Population : 14994568"
                    }
                },
                "MT": {
                    "value": 40105844,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malta",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malta</span><br />Population : 40105844"
                    }
                },
                "MA": {
                    "value": 20899017,
                    "href": "http://en.wikipedia.org/w/index.php?search=Morocco",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Morocco</span><br />Population : 20899017"
                    }
                },
                "MU": {
                    "value": 41637711,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mauritius",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritius</span><br />Population : 41637711"
                    }
                },
                "MR": {
                    "value": 47481836,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mauritania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritania</span><br />Population : 47481836"
                    }
                },
                "MX": {
                    "value": 35886813,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mexico",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mexico</span><br />Population : 35886813"
                    }
                },
                "FM": {
                    "value": 14018414,
                    "href": "http://en.wikipedia.org/w/index.php?search=Micronesia, Federated States Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Micronesia, Federated States Of</span><br />Population : 14018414"
                    }
                },
                "MD": {
                    "value": 29170731,
                    "href": "http://en.wikipedia.org/w/index.php?search=Moldova, Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Moldova, Republic Of</span><br />Population : 29170731"
                    }
                },
                "MC": {
                    "value": 10124768,
                    "href": "http://en.wikipedia.org/w/index.php?search=Monaco",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Monaco</span><br />Population : 10124768"
                    }
                },
                "MN": {
                    "value": 25935165,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mongolia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mongolia</span><br />Population : 25935165"
                    }
                },
                "ME": {
                    "value": 41182538,
                    "href": "http://en.wikipedia.org/w/index.php?search=Montenegro",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Montenegro</span><br />Population : 41182538"
                    }
                },
                "MZ": {
                    "value": 13778946,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mozambique",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mozambique</span><br />Population : 13778946"
                    }
                },
                "NA": {
                    "value": 13363989,
                    "href": "http://en.wikipedia.org/w/index.php?search=Namibia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Namibia</span><br />Population : 13363989"
                    }
                },
                "NP": {
                    "value": 8379025,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nepal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nepal</span><br />Population : 8379025"
                    }
                },
                "NI": {
                    "value": 18157013,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nicaragua",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nicaragua</span><br />Population : 18157013"
                    }
                },
                "NE": {
                    "value": 38515482,
                    "href": "http://en.wikipedia.org/w/index.php?search=Niger",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Niger</span><br />Population : 38515482"
                    }
                },
                "NG": {
                    "value": 17890124,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nigeria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nigeria</span><br />Population : 17890124"
                    }
                },
                "NO": {
                    "value": 11296518,
                    "href": "http://en.wikipedia.org/w/index.php?search=Norway",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Norway</span><br />Population : 11296518"
                    }
                },
                "NZ": {
                    "value": 10457464,
                    "href": "http://en.wikipedia.org/w/index.php?search=New Zealand",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New Zealand</span><br />Population : 10457464"
                    }
                },
                "OM": {
                    "value": 56583463,
                    "href": "http://en.wikipedia.org/w/index.php?search=Oman",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Oman</span><br />Population : 56583463"
                    }
                },
                "UG": {
                    "value": 14343799,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uganda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uganda</span><br />Population : 14343799"
                    }
                },
                "UZ": {
                    "value": 32815768,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uzbekistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uzbekistan</span><br />Population : 32815768"
                    }
                },
                "PK": {
                    "value": 53649518,
                    "href": "http://en.wikipedia.org/w/index.php?search=Pakistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Pakistan</span><br />Population : 53649518"
                    }
                },
                "PS": {
                    "value": 51136014,
                    "href": "http://en.wikipedia.org/w/index.php?search=Palestine, State Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palestine, State Of</span><br />Population : 51136014"
                    }
                },
                "PA": {
                    "value": 23315637,
                    "href": "http://en.wikipedia.org/w/index.php?search=Panama",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Panama</span><br />Population : 23315637"
                    }
                },
                "PG": {
                    "value": 41114902,
                    "href": "http://en.wikipedia.org/w/index.php?search=Papua New Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Papua New Guinea</span><br />Population : 41114902"
                    }
                },
                "PY": {
                    "value": 33548798,
                    "href": "http://en.wikipedia.org/w/index.php?search=Paraguay",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paraguay</span><br />Population : 33548798"
                    }
                },
                "NL": {
                    "value": 35276260,
                    "href": "http://en.wikipedia.org/w/index.php?search=Netherlands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Netherlands</span><br />Population : 35276260"
                    }
                },
                "PE": {
                    "value": 35446265,
                    "href": "http://en.wikipedia.org/w/index.php?search=Peru",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Peru</span><br />Population : 35446265"
                    }
                },
                "PH": {
                    "value": 34322043,
                    "href": "http://en.wikipedia.org/w/index.php?search=Philippines",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Philippines</span><br />Population : 34322043"
                    }
                },
                "PL": {
                    "value": 45620929,
                    "href": "http://en.wikipedia.org/w/index.php?search=Poland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Poland</span><br />Population : 45620929"
                    }
                },
                "PT": {
                    "value": 52057328,
                    "href": "http://en.wikipedia.org/w/index.php?search=Portugal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Portugal</span><br />Population : 52057328"
                    }
                },
                "QA": {
                    "value": 11426306,
                    "href": "http://en.wikipedia.org/w/index.php?search=Qatar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Qatar</span><br />Population : 11426306"
                    }
                },
                "DO": {
                    "value": 40515317,
                    "href": "http://en.wikipedia.org/w/index.php?search=Dominican Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominican Republic</span><br />Population : 40515317"
                    }
                },
                "RO": {
                    "value": 35581537,
                    "href": "http://en.wikipedia.org/w/index.php?search=Romania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Romania</span><br />Population : 35581537"
                    }
                },
                "GB": {
                    "value": 54682340,
                    "href": "http://en.wikipedia.org/w/index.php?search=United Kingdom",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Kingdom</span><br />Population : 54682340"
                    }
                },
                "RU": {
                    "value": 1796386,
                    "href": "http://en.wikipedia.org/w/index.php?search=Russian Federation",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Russian Federation</span><br />Population : 1796386"
                    }
                },
                "RW": {
                    "value": 57822849,
                    "href": "http://en.wikipedia.org/w/index.php?search=Rwanda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Rwanda</span><br />Population : 57822849"
                    }
                },
                "KN": {
                    "value": 38996246,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Kitts And Nevis",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Kitts And Nevis</span><br />Population : 38996246"
                    }
                },
                "SM": {
                    "value": 26304422,
                    "href": "http://en.wikipedia.org/w/index.php?search=San Marino",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">San Marino</span><br />Population : 26304422"
                    }
                },
                "VC": {
                    "value": 27147131,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Vincent And The Grenadines",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Vincent And The Grenadines</span><br />Population : 27147131"
                    }
                },
                "LC": {
                    "value": 54422763,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Lucia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Lucia</span><br />Population : 54422763"
                    }
                },
                "SV": {
                    "value": 1580682,
                    "href": "http://en.wikipedia.org/w/index.php?search=El Salvador",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">El Salvador</span><br />Population : 1580682"
                    }
                },
                "WS": {
                    "value": 39926700,
                    "href": "http://en.wikipedia.org/w/index.php?search=Samoa",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Samoa</span><br />Population : 39926700"
                    }
                },
                "ST": {
                    "value": 18219165,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sao Tome And Principe",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sao Tome And Principe</span><br />Population : 18219165"
                    }
                },
                "SN": {
                    "value": 28443185,
                    "href": "http://en.wikipedia.org/w/index.php?search=Senegal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Senegal</span><br />Population : 28443185"
                    }
                },
                "RS": {
                    "value": 18800470,
                    "href": "http://en.wikipedia.org/w/index.php?search=Serbia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Serbia</span><br />Population : 18800470"
                    }
                },
                "SC": {
                    "value": 18802298,
                    "href": "http://en.wikipedia.org/w/index.php?search=Seychelles",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Seychelles</span><br />Population : 18802298"
                    }
                },
                "SL": {
                    "value": 55503113,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sierra Leone",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sierra Leone</span><br />Population : 55503113"
                    }
                },
                "SG": {
                    "value": 7962240,
                    "href": "http://en.wikipedia.org/w/index.php?search=Singapore",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Singapore</span><br />Population : 7962240"
                    }
                },
                "SK": {
                    "value": 36371234,
                    "href": "http://en.wikipedia.org/w/index.php?search=Slovakia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovakia</span><br />Population : 36371234"
                    }
                },
                "SI": {
                    "value": 35934342,
                    "href": "http://en.wikipedia.org/w/index.php?search=Slovenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovenia</span><br />Population : 35934342"
                    }
                },
                "SO": {
                    "value": 9839599,
                    "href": "http://en.wikipedia.org/w/index.php?search=Somalia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Somalia</span><br />Population : 9839599"
                    }
                },
                "SD": {
                    "value": 51008054,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sudan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sudan</span><br />Population : 51008054"
                    }
                },
                "SS": {
                    "value": 29958600,
                    "href": "http://en.wikipedia.org/w/index.php?search=South Sudan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Sudan</span><br />Population : 29958600"
                    }
                },
                "LK": {
                    "value": 14575955,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sri Lanka",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sri Lanka</span><br />Population : 14575955"
                    }
                },
                "SE": {
                    "value": 21619250,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sweden",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sweden</span><br />Population : 21619250"
                    }
                },
                "CH": {
                    "value": 5958749,
                    "href": "http://en.wikipedia.org/w/index.php?search=Switzerland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Switzerland</span><br />Population : 5958749"
                    }
                },
                "SR": {
                    "value": 5178192,
                    "href": "http://en.wikipedia.org/w/index.php?search=Suriname",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Suriname</span><br />Population : 5178192"
                    }
                },
                "SZ": {
                    "value": 27730264,
                    "href": "http://en.wikipedia.org/w/index.php?search=Swaziland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Swaziland</span><br />Population : 27730264"
                    }
                },
                "SY": {
                    "value": 21582690,
                    "href": "http://en.wikipedia.org/w/index.php?search=Syrian Arab Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Syrian Arab Republic</span><br />Population : 21582690"
                    }
                },
                "TJ": {
                    "value": 50642453,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tajikistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tajikistan</span><br />Population : 50642453"
                    }
                },
                "TZ": {
                    "value": 57495636,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tanzania, United Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tanzania, United Republic Of</span><br />Population : 57495636"
                    }
                },
                "TD": {
                    "value": 58550394,
                    "href": "http://en.wikipedia.org/w/index.php?search=Chad",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chad</span><br />Population : 58550394"
                    }
                },
                "CZ": {
                    "value": 30320544,
                    "href": "http://en.wikipedia.org/w/index.php?search=Czech Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Czech Republic</span><br />Population : 30320544"
                    }
                },
                "TH": {
                    "value": 33437289,
                    "href": "http://en.wikipedia.org/w/index.php?search=Thailand",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Thailand</span><br />Population : 33437289"
                    }
                },
                "TL": {
                    "value": 12826556,
                    "href": "http://en.wikipedia.org/w/index.php?search=Timor-leste",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Timor-leste</span><br />Population : 12826556"
                    }
                },
                "TG": {
                    "value": 339468,
                    "href": "http://en.wikipedia.org/w/index.php?search=Togo",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Togo</span><br />Population : 339468"
                    }
                },
                "TO": {
                    "value": 38473438,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tonga",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tonga</span><br />Population : 38473438"
                    }
                },
                "TT": {
                    "value": 12371383,
                    "href": "http://en.wikipedia.org/w/index.php?search=Trinidad And Tobago",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Trinidad And Tobago</span><br />Population : 12371383"
                    }
                },
                "TN": {
                    "value": 26536578,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tunisia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tunisia</span><br />Population : 26536578"
                    }
                },
                "TM": {
                    "value": 15950613,
                    "href": "http://en.wikipedia.org/w/index.php?search=Turkmenistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkmenistan</span><br />Population : 15950613"
                    }
                },
                "TR": {
                    "value": 6731994,
                    "href": "http://en.wikipedia.org/w/index.php?search=Turkey",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkey</span><br />Population : 6731994"
                    }
                },
                "TV": {
                    "value": 15522860,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tuvalu",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tuvalu</span><br />Population : 15522860"
                    }
                },
                "VU": {
                    "value": 44341327,
                    "href": "http://en.wikipedia.org/w/index.php?search=Vanuatu",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Vanuatu</span><br />Population : 44341327"
                    }
                },
                "VE": {
                    "value": 58586954,
                    "href": "http://en.wikipedia.org/w/index.php?search=Venezuela, Bolivarian Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Venezuela, Bolivarian Republic Of</span><br />Population : 58586954"
                    }
                },
                "VN": {
                    "value": 45536841,
                    "href": "http://en.wikipedia.org/w/index.php?search=Viet Nam",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Viet Nam</span><br />Population : 45536841"
                    }
                },
                "UA": {
                    "value": 41019846,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ukraine",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ukraine</span><br />Population : 41019846"
                    }
                },
                "UY": {
                    "value": 41906427,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uruguay",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uruguay</span><br />Population : 41906427"
                    }
                },
                "YE": {
                    "value": 51501615,
                    "href": "http://en.wikipedia.org/w/index.php?search=Yemen",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Yemen</span><br />Population : 51501615"
                    }
                },
                "ZM": {
                    "value": 55678602,
                    "href": "http://en.wikipedia.org/w/index.php?search=Zambia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zambia</span><br />Population : 55678602"
                    }
                },
                "ZW": {
                    "value": 57040464,
                    "href": "http://en.wikipedia.org/w/index.php?search=Zimbabwe",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zimbabwe</span><br />Population : 57040464"
                    }
                }
            },
            "plots": {
                "paris": {
                    "value": 678406,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paris</span><br />Population: 678406"
                    }
                },
                "newyork": {
                    "value": 279913,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New-York</span><br />Population: 279913"
                    }
                },
                "sydney": {
                    "value": 747363,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sydney</span><br />Population: 747363"
                    }
                },
                "brasilia": {
                    "value": 140032,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brasilia</span><br />Population: 140032"
                    }
                },
                "tokyo": {
                    "value": 769153,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tokyo</span><br />Population: 769153"
                    }
                }
            }
        },
        "2013": {
            "areas": {
                "AF": {
                    "value": 30428397,
                    "href": "http://en.wikipedia.org/w/index.php?search=Afghanistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Afghanistan</span><br />Population : 30428397"
                    }
                },
                "ZA": {
                    "value": 42385364,
                    "href": "http://en.wikipedia.org/w/index.php?search=South Africa",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Africa</span><br />Population : 42385364"
                    }
                },
                "AL": {
                    "value": 23215097,
                    "href": "http://en.wikipedia.org/w/index.php?search=Albania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Albania</span><br />Population : 23215097"
                    }
                },
                "DZ": {
                    "value": 59170087,
                    "href": "http://en.wikipedia.org/w/index.php?search=Algeria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Algeria</span><br />Population : 59170087"
                    }
                },
                "DE": {
                    "value": 12696768,
                    "href": "http://en.wikipedia.org/w/index.php?search=Germany",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Germany</span><br />Population : 12696768"
                    }
                },
                "AD": {
                    "value": 30181616,
                    "href": "http://en.wikipedia.org/w/index.php?search=Andorra",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Andorra</span><br />Population : 30181616"
                    }
                },
                "AO": {
                    "value": 59475364,
                    "href": "http://en.wikipedia.org/w/index.php?search=Angola",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Angola</span><br />Population : 59475364"
                    }
                },
                "AG": {
                    "value": 31932843,
                    "href": "http://en.wikipedia.org/w/index.php?search=Antigua And Barbuda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Antigua And Barbuda</span><br />Population : 31932843"
                    }
                },
                "SA": {
                    "value": 57555961,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saudi Arabia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saudi Arabia</span><br />Population : 57555961"
                    }
                },
                "AR": {
                    "value": 11777282,
                    "href": "http://en.wikipedia.org/w/index.php?search=Argentina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Argentina</span><br />Population : 11777282"
                    }
                },
                "AM": {
                    "value": 18871762,
                    "href": "http://en.wikipedia.org/w/index.php?search=Armenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Armenia</span><br />Population : 18871762"
                    }
                },
                "AU": {
                    "value": 12534076,
                    "href": "http://en.wikipedia.org/w/index.php?search=Australia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Australia</span><br />Population : 12534076"
                    }
                },
                "AT": {
                    "value": 58309098,
                    "href": "http://en.wikipedia.org/w/index.php?search=Austria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Austria</span><br />Population : 58309098"
                    }
                },
                "AZ": {
                    "value": 37712988,
                    "href": "http://en.wikipedia.org/w/index.php?search=Azerbaijan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Azerbaijan</span><br />Population : 37712988"
                    }
                },
                "BS": {
                    "value": 19332419,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bahamas",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahamas</span><br />Population : 19332419"
                    }
                },
                "BH": {
                    "value": 36539411,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bahrain",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bahrain</span><br />Population : 36539411"
                    }
                },
                "BD": {
                    "value": 58009305,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bangladesh",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bangladesh</span><br />Population : 58009305"
                    }
                },
                "BB": {
                    "value": 8779358,
                    "href": "http://en.wikipedia.org/w/index.php?search=Barbados",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Barbados</span><br />Population : 8779358"
                    }
                },
                "BE": {
                    "value": 29035458,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belgium",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belgium</span><br />Population : 29035458"
                    }
                },
                "BZ": {
                    "value": 49664472,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belize",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belize</span><br />Population : 49664472"
                    }
                },
                "BJ": {
                    "value": 9859707,
                    "href": "http://en.wikipedia.org/w/index.php?search=Benin",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Benin</span><br />Population : 9859707"
                    }
                },
                "BT": {
                    "value": 35417017,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bhutan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bhutan</span><br />Population : 35417017"
                    }
                },
                "BY": {
                    "value": 46109006,
                    "href": "http://en.wikipedia.org/w/index.php?search=Belarus",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Belarus</span><br />Population : 46109006"
                    }
                },
                "MM": {
                    "value": 27574884,
                    "href": "http://en.wikipedia.org/w/index.php?search=Myanmar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Myanmar</span><br />Population : 27574884"
                    }
                },
                "BO": {
                    "value": 16813431,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bolivia, Plurinational State Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bolivia, Plurinational State Of</span><br />Population : 16813431"
                    }
                },
                "BA": {
                    "value": 18416589,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bosnia And Herzegovina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bosnia And Herzegovina</span><br />Population : 18416589"
                    }
                },
                "BW": {
                    "value": 38731186,
                    "href": "http://en.wikipedia.org/w/index.php?search=Botswana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Botswana</span><br />Population : 38731186"
                    }
                },
                "BR": {
                    "value": 35786273,
                    "href": "http://en.wikipedia.org/w/index.php?search=Brazil",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brazil</span><br />Population : 35786273"
                    }
                },
                "BN": {
                    "value": 32073599,
                    "href": "http://en.wikipedia.org/w/index.php?search=Brunei Darussalam",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brunei Darussalam</span><br />Population : 32073599"
                    }
                },
                "BG": {
                    "value": 8318701,
                    "href": "http://en.wikipedia.org/w/index.php?search=Bulgaria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Bulgaria</span><br />Population : 8318701"
                    }
                },
                "BF": {
                    "value": 5030123,
                    "href": "http://en.wikipedia.org/w/index.php?search=Burkina Faso",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burkina Faso</span><br />Population : 5030123"
                    }
                },
                "BI": {
                    "value": 49964264,
                    "href": "http://en.wikipedia.org/w/index.php?search=Burundi",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Burundi</span><br />Population : 49964264"
                    }
                },
                "KH": {
                    "value": 38793338,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cambodia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cambodia</span><br />Population : 38793338"
                    }
                },
                "CM": {
                    "value": 25713977,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cameroon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cameroon</span><br />Population : 25713977"
                    }
                },
                "CA": {
                    "value": 32983945,
                    "href": "http://en.wikipedia.org/w/index.php?search=Canada",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Canada</span><br />Population : 32983945"
                    }
                },
                "CV": {
                    "value": 15824481,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cape Verde",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cape Verde</span><br />Population : 15824481"
                    }
                },
                "CF": {
                    "value": 50075772,
                    "href": "http://en.wikipedia.org/w/index.php?search=Central African Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Central African Republic</span><br />Population : 50075772"
                    }
                },
                "CL": {
                    "value": 1343042,
                    "href": "http://en.wikipedia.org/w/index.php?search=Chile",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chile</span><br />Population : 1343042"
                    }
                },
                "CN": {
                    "value": 920773,
                    "href": "http://en.wikipedia.org/w/index.php?search=China",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">China</span><br />Population : 920773"
                    }
                },
                "CY": {
                    "value": 28832550,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cyprus",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cyprus</span><br />Population : 28832550"
                    }
                },
                "CO": {
                    "value": 49074027,
                    "href": "http://en.wikipedia.org/w/index.php?search=Colombia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Colombia</span><br />Population : 49074027"
                    }
                },
                "KM": {
                    "value": 15696521,
                    "href": "http://en.wikipedia.org/w/index.php?search=Comoros",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Comoros</span><br />Population : 15696521"
                    }
                },
                "CG": {
                    "value": 56718735,
                    "href": "http://en.wikipedia.org/w/index.php?search=Congo",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo</span><br />Population : 56718735"
                    }
                },
                "CD": {
                    "value": 34704096,
                    "href": "http://en.wikipedia.org/w/index.php?search=Congo, The Democratic Republic Of The",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Congo, The Democratic Republic Of The</span><br />Population : 34704096"
                    }
                },
                "KP": {
                    "value": 48891227,
                    "href": "http://en.wikipedia.org/w/index.php?search=Korea, Democratic People's Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Democratic People's Republic Of</span><br />Population : 48891227"
                    }
                },
                "KR": {
                    "value": 59415040,
                    "href": "http://en.wikipedia.org/w/index.php?search=Korea, Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Korea, Republic Of</span><br />Population : 59415040"
                    }
                },
                "CR": {
                    "value": 18805954,
                    "href": "http://en.wikipedia.org/w/index.php?search=Costa Rica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Costa Rica</span><br />Population : 18805954"
                    }
                },
                "CI": {
                    "value": 9104742,
                    "href": "http://en.wikipedia.org/w/index.php?search=C\u00d4te D'ivoire",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">C\u00d4te D'ivoire</span><br />Population : 9104742"
                    }
                },
                "HR": {
                    "value": 32680496,
                    "href": "http://en.wikipedia.org/w/index.php?search=Croatia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Croatia</span><br />Population : 32680496"
                    }
                },
                "CU": {
                    "value": 33289221,
                    "href": "http://en.wikipedia.org/w/index.php?search=Cuba",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Cuba</span><br />Population : 33289221"
                    }
                },
                "DK": {
                    "value": 35060556,
                    "href": "http://en.wikipedia.org/w/index.php?search=Denmark",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Denmark</span><br />Population : 35060556"
                    }
                },
                "DJ": {
                    "value": 17550116,
                    "href": "http://en.wikipedia.org/w/index.php?search=Djibouti",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Djibouti</span><br />Population : 17550116"
                    }
                },
                "DM": {
                    "value": 13544961,
                    "href": "http://en.wikipedia.org/w/index.php?search=Dominica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominica</span><br />Population : 13544961"
                    }
                },
                "EG": {
                    "value": 47759693,
                    "href": "http://en.wikipedia.org/w/index.php?search=Egypt",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Egypt</span><br />Population : 47759693"
                    }
                },
                "AE": {
                    "value": 43710666,
                    "href": "http://en.wikipedia.org/w/index.php?search=United Arab Emirates",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Arab Emirates</span><br />Population : 43710666"
                    }
                },
                "EC": {
                    "value": 35705841,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ecuador",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ecuador</span><br />Population : 35705841"
                    }
                },
                "ER": {
                    "value": 34537747,
                    "href": "http://en.wikipedia.org/w/index.php?search=Eritrea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Eritrea</span><br />Population : 34537747"
                    }
                },
                "ES": {
                    "value": 3617077,
                    "href": "http://en.wikipedia.org/w/index.php?search=Spain",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Spain</span><br />Population : 3617077"
                    }
                },
                "EE": {
                    "value": 12934408,
                    "href": "http://en.wikipedia.org/w/index.php?search=Estonia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Estonia</span><br />Population : 12934408"
                    }
                },
                "US": {
                    "value": 9287542,
                    "href": "http://en.wikipedia.org/w/index.php?search=United States",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United States</span><br />Population : 9287542"
                    }
                },
                "ET": {
                    "value": 48861978,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ethiopia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ethiopia</span><br />Population : 48861978"
                    }
                },
                "FJ": {
                    "value": 11302002,
                    "href": "http://en.wikipedia.org/w/index.php?search=Fiji",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Fiji</span><br />Population : 11302002"
                    }
                },
                "FI": {
                    "value": 759909,
                    "href": "http://en.wikipedia.org/w/index.php?search=Finland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Finland</span><br />Population : 759909"
                    }
                },
                "FR": {
                    "value": 33760846,
                    "href": "http://en.wikipedia.org/w/index.php?search=France",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">France</span><br />Population : 33760846"
                    }
                },
                "GA": {
                    "value": 39670780,
                    "href": "http://en.wikipedia.org/w/index.php?search=Gabon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gabon</span><br />Population : 39670780"
                    }
                },
                "GM": {
                    "value": 31505090,
                    "href": "http://en.wikipedia.org/w/index.php?search=Gambia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Gambia</span><br />Population : 31505090"
                    }
                },
                "GE": {
                    "value": 35265292,
                    "href": "http://en.wikipedia.org/w/index.php?search=Georgia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Georgia</span><br />Population : 35265292"
                    }
                },
                "GH": {
                    "value": 54841376,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ghana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ghana</span><br />Population : 54841376"
                    }
                },
                "GR": {
                    "value": 20067276,
                    "href": "http://en.wikipedia.org/w/index.php?search=Greece",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Greece</span><br />Population : 20067276"
                    }
                },
                "GD": {
                    "value": 54866968,
                    "href": "http://en.wikipedia.org/w/index.php?search=Grenada",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Grenada</span><br />Population : 54866968"
                    }
                },
                "GT": {
                    "value": 54678684,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guatemala",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guatemala</span><br />Population : 54678684"
                    }
                },
                "GN": {
                    "value": 48194757,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea</span><br />Population : 48194757"
                    }
                },
                "GQ": {
                    "value": 33104593,
                    "href": "http://en.wikipedia.org/w/index.php?search=Equatorial Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Equatorial Guinea</span><br />Population : 33104593"
                    }
                },
                "GW": {
                    "value": 42078259,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guinea-bissau",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guinea-bissau</span><br />Population : 42078259"
                    }
                },
                "GY": {
                    "value": 27178207,
                    "href": "http://en.wikipedia.org/w/index.php?search=Guyana",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Guyana</span><br />Population : 27178207"
                    }
                },
                "HT": {
                    "value": 19436615,
                    "href": "http://en.wikipedia.org/w/index.php?search=Haiti",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Haiti</span><br />Population : 19436615"
                    }
                },
                "HN": {
                    "value": 31985855,
                    "href": "http://en.wikipedia.org/w/index.php?search=Honduras",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Honduras</span><br />Population : 31985855"
                    }
                },
                "HU": {
                    "value": 43679590,
                    "href": "http://en.wikipedia.org/w/index.php?search=Hungary",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Hungary</span><br />Population : 43679590"
                    }
                },
                "JM": {
                    "value": 10791989,
                    "href": "http://en.wikipedia.org/w/index.php?search=Jamaica",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jamaica</span><br />Population : 10791989"
                    }
                },
                "JP": {
                    "value": 4132574,
                    "href": "http://en.wikipedia.org/w/index.php?search=Japan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Japan</span><br />Population : 4132574"
                    }
                },
                "MH": {
                    "value": 59764188,
                    "href": "http://en.wikipedia.org/w/index.php?search=Marshall Islands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Marshall Islands</span><br />Population : 59764188"
                    }
                },
                "PW": {
                    "value": 20361584,
                    "href": "http://en.wikipedia.org/w/index.php?search=Palau",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palau</span><br />Population : 20361584"
                    }
                },
                "SB": {
                    "value": 33598154,
                    "href": "http://en.wikipedia.org/w/index.php?search=Solomon Islands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Solomon Islands</span><br />Population : 33598154"
                    }
                },
                "IN": {
                    "value": 7898260,
                    "href": "http://en.wikipedia.org/w/index.php?search=India",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">India</span><br />Population : 7898260"
                    }
                },
                "ID": {
                    "value": 9742715,
                    "href": "http://en.wikipedia.org/w/index.php?search=Indonesia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Indonesia</span><br />Population : 9742715"
                    }
                },
                "JO": {
                    "value": 22664868,
                    "href": "http://en.wikipedia.org/w/index.php?search=Jordan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Jordan</span><br />Population : 22664868"
                    }
                },
                "IR": {
                    "value": 33824826,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iran, Islamic Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iran, Islamic Republic Of</span><br />Population : 33824826"
                    }
                },
                "IQ": {
                    "value": 6399298,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iraq",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iraq</span><br />Population : 6399298"
                    }
                },
                "IE": {
                    "value": 44774564,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ireland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ireland</span><br />Population : 44774564"
                    }
                },
                "IS": {
                    "value": 11280066,
                    "href": "http://en.wikipedia.org/w/index.php?search=Iceland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Iceland</span><br />Population : 11280066"
                    }
                },
                "IL": {
                    "value": 39550131,
                    "href": "http://en.wikipedia.org/w/index.php?search=Israel",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Israel</span><br />Population : 39550131"
                    }
                },
                "IT": {
                    "value": 5251312,
                    "href": "http://en.wikipedia.org/w/index.php?search=Italy",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Italy</span><br />Population : 5251312"
                    }
                },
                "KZ": {
                    "value": 58162858,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kazakhstan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kazakhstan</span><br />Population : 58162858"
                    }
                },
                "KE": {
                    "value": 36747803,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kenya",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kenya</span><br />Population : 36747803"
                    }
                },
                "KG": {
                    "value": 48902195,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kyrgyzstan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kyrgyzstan</span><br />Population : 48902195"
                    }
                },
                "KI": {
                    "value": 40019928,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kiribati",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kiribati</span><br />Population : 40019928"
                    }
                },
                "KW": {
                    "value": 33060721,
                    "href": "http://en.wikipedia.org/w/index.php?search=Kuwait",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Kuwait</span><br />Population : 33060721"
                    }
                },
                "LA": {
                    "value": 59758704,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lao People's Democratic Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lao People's Democratic Republic</span><br />Population : 59758704"
                    }
                },
                "LS": {
                    "value": 30059140,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lesotho",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lesotho</span><br />Population : 30059140"
                    }
                },
                "LV": {
                    "value": 56420771,
                    "href": "http://en.wikipedia.org/w/index.php?search=Latvia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Latvia</span><br />Population : 56420771"
                    }
                },
                "LB": {
                    "value": 42471280,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lebanon",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lebanon</span><br />Population : 42471280"
                    }
                },
                "LR": {
                    "value": 11053393,
                    "href": "http://en.wikipedia.org/w/index.php?search=Liberia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liberia</span><br />Population : 11053393"
                    }
                },
                "LY": {
                    "value": 41049094,
                    "href": "http://en.wikipedia.org/w/index.php?search=Libya",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Libya</span><br />Population : 41049094"
                    }
                },
                "LI": {
                    "value": 30119464,
                    "href": "http://en.wikipedia.org/w/index.php?search=Liechtenstein",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Liechtenstein</span><br />Population : 30119464"
                    }
                },
                "LT": {
                    "value": 9647659,
                    "href": "http://en.wikipedia.org/w/index.php?search=Lithuania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Lithuania</span><br />Population : 9647659"
                    }
                },
                "LU": {
                    "value": 31022498,
                    "href": "http://en.wikipedia.org/w/index.php?search=Luxembourg",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Luxembourg</span><br />Population : 31022498"
                    }
                },
                "MK": {
                    "value": 50050180,
                    "href": "http://en.wikipedia.org/w/index.php?search=Macedonia, The Former Yugoslav Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Macedonia, The Former Yugoslav Republic Of</span><br />Population : 50050180"
                    }
                },
                "MG": {
                    "value": 26631634,
                    "href": "http://en.wikipedia.org/w/index.php?search=Madagascar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Madagascar</span><br />Population : 26631634"
                    }
                },
                "MY": {
                    "value": 7592984,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malaysia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malaysia</span><br />Population : 7592984"
                    }
                },
                "MW": {
                    "value": 50406641,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malawi",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malawi</span><br />Population : 50406641"
                    }
                },
                "MV": {
                    "value": 55190525,
                    "href": "http://en.wikipedia.org/w/index.php?search=Maldives",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Maldives</span><br />Population : 55190525"
                    }
                },
                "ML": {
                    "value": 21622906,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mali",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mali</span><br />Population : 21622906"
                    }
                },
                "MT": {
                    "value": 19460379,
                    "href": "http://en.wikipedia.org/w/index.php?search=Malta",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Malta</span><br />Population : 19460379"
                    }
                },
                "MA": {
                    "value": 29896448,
                    "href": "http://en.wikipedia.org/w/index.php?search=Morocco",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Morocco</span><br />Population : 29896448"
                    }
                },
                "MU": {
                    "value": 24648251,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mauritius",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritius</span><br />Population : 24648251"
                    }
                },
                "MR": {
                    "value": 20708905,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mauritania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mauritania</span><br />Population : 20708905"
                    }
                },
                "MX": {
                    "value": 58352970,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mexico",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mexico</span><br />Population : 58352970"
                    }
                },
                "FM": {
                    "value": 20032544,
                    "href": "http://en.wikipedia.org/w/index.php?search=Micronesia, Federated States Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Micronesia, Federated States Of</span><br />Population : 20032544"
                    }
                },
                "MD": {
                    "value": 16451486,
                    "href": "http://en.wikipedia.org/w/index.php?search=Moldova, Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Moldova, Republic Of</span><br />Population : 16451486"
                    }
                },
                "MC": {
                    "value": 59455256,
                    "href": "http://en.wikipedia.org/w/index.php?search=Monaco",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Monaco</span><br />Population : 59455256"
                    }
                },
                "MN": {
                    "value": 47523880,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mongolia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mongolia</span><br />Population : 47523880"
                    }
                },
                "ME": {
                    "value": 41405554,
                    "href": "http://en.wikipedia.org/w/index.php?search=Montenegro",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Montenegro</span><br />Population : 41405554"
                    }
                },
                "MZ": {
                    "value": 58678354,
                    "href": "http://en.wikipedia.org/w/index.php?search=Mozambique",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Mozambique</span><br />Population : 58678354"
                    }
                },
                "NA": {
                    "value": 23677582,
                    "href": "http://en.wikipedia.org/w/index.php?search=Namibia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Namibia</span><br />Population : 23677582"
                    }
                },
                "NP": {
                    "value": 59976236,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nepal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nepal</span><br />Population : 59976236"
                    }
                },
                "NI": {
                    "value": 24756103,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nicaragua",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nicaragua</span><br />Population : 24756103"
                    }
                },
                "NE": {
                    "value": 29656979,
                    "href": "http://en.wikipedia.org/w/index.php?search=Niger",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Niger</span><br />Population : 29656979"
                    }
                },
                "NG": {
                    "value": 8841510,
                    "href": "http://en.wikipedia.org/w/index.php?search=Nigeria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Nigeria</span><br />Population : 8841510"
                    }
                },
                "NO": {
                    "value": 18963162,
                    "href": "http://en.wikipedia.org/w/index.php?search=Norway",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Norway</span><br />Population : 18963162"
                    }
                },
                "NZ": {
                    "value": 50574817,
                    "href": "http://en.wikipedia.org/w/index.php?search=New Zealand",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New Zealand</span><br />Population : 50574817"
                    }
                },
                "OM": {
                    "value": 17365487,
                    "href": "http://en.wikipedia.org/w/index.php?search=Oman",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Oman</span><br />Population : 17365487"
                    }
                },
                "UG": {
                    "value": 20562665,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uganda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uganda</span><br />Population : 20562665"
                    }
                },
                "UZ": {
                    "value": 57387784,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uzbekistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uzbekistan</span><br />Population : 57387784"
                    }
                },
                "PK": {
                    "value": 49602320,
                    "href": "http://en.wikipedia.org/w/index.php?search=Pakistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Pakistan</span><br />Population : 49602320"
                    }
                },
                "PS": {
                    "value": 19932004,
                    "href": "http://en.wikipedia.org/w/index.php?search=Palestine, State Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Palestine, State Of</span><br />Population : 19932004"
                    }
                },
                "PA": {
                    "value": 34506671,
                    "href": "http://en.wikipedia.org/w/index.php?search=Panama",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Panama</span><br />Population : 34506671"
                    }
                },
                "PG": {
                    "value": 38603226,
                    "href": "http://en.wikipedia.org/w/index.php?search=Papua New Guinea",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Papua New Guinea</span><br />Population : 38603226"
                    }
                },
                "PY": {
                    "value": 42429236,
                    "href": "http://en.wikipedia.org/w/index.php?search=Paraguay",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paraguay</span><br />Population : 42429236"
                    }
                },
                "NL": {
                    "value": 5534652,
                    "href": "http://en.wikipedia.org/w/index.php?search=Netherlands",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Netherlands</span><br />Population : 5534652"
                    }
                },
                "PE": {
                    "value": 56289154,
                    "href": "http://en.wikipedia.org/w/index.php?search=Peru",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Peru</span><br />Population : 56289154"
                    }
                },
                "PH": {
                    "value": 35612613,
                    "href": "http://en.wikipedia.org/w/index.php?search=Philippines",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Philippines</span><br />Population : 35612613"
                    }
                },
                "PL": {
                    "value": 19696191,
                    "href": "http://en.wikipedia.org/w/index.php?search=Poland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Poland</span><br />Population : 19696191"
                    }
                },
                "PT": {
                    "value": 32201559,
                    "href": "http://en.wikipedia.org/w/index.php?search=Portugal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Portugal</span><br />Population : 32201559"
                    }
                },
                "QA": {
                    "value": 1675738,
                    "href": "http://en.wikipedia.org/w/index.php?search=Qatar",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Qatar</span><br />Population : 1675738"
                    }
                },
                "DO": {
                    "value": 31569070,
                    "href": "http://en.wikipedia.org/w/index.php?search=Dominican Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Dominican Republic</span><br />Population : 31569070"
                    }
                },
                "RO": {
                    "value": 1993811,
                    "href": "http://en.wikipedia.org/w/index.php?search=Romania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Romania</span><br />Population : 1993811"
                    }
                },
                "GB": {
                    "value": 8210849,
                    "href": "http://en.wikipedia.org/w/index.php?search=United Kingdom",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">United Kingdom</span><br />Population : 8210849"
                    }
                },
                "RU": {
                    "value": 55982050,
                    "href": "http://en.wikipedia.org/w/index.php?search=Russian Federation",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Russian Federation</span><br />Population : 55982050"
                    }
                },
                "RW": {
                    "value": 39575723,
                    "href": "http://en.wikipedia.org/w/index.php?search=Rwanda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Rwanda</span><br />Population : 39575723"
                    }
                },
                "KN": {
                    "value": 39862720,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Kitts And Nevis",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Kitts And Nevis</span><br />Population : 39862720"
                    }
                },
                "SM": {
                    "value": 51490647,
                    "href": "http://en.wikipedia.org/w/index.php?search=San Marino",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">San Marino</span><br />Population : 51490647"
                    }
                },
                "VC": {
                    "value": 15173712,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Vincent And The Grenadines",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Vincent And The Grenadines</span><br />Population : 15173712"
                    }
                },
                "LC": {
                    "value": 42785697,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saint Lucia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saint Lucia</span><br />Population : 42785697"
                    }
                },
                "SV": {
                    "value": 34093543,
                    "href": "http://en.wikipedia.org/w/index.php?search=El Salvador",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">El Salvador</span><br />Population : 34093543"
                    }
                },
                "WS": {
                    "value": 10419076,
                    "href": "http://en.wikipedia.org/w/index.php?search=Samoa",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Samoa</span><br />Population : 10419076"
                    }
                },
                "ST": {
                    "value": 4666351,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sao Tome And Principe",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sao Tome And Principe</span><br />Population : 4666351"
                    }
                },
                "SN": {
                    "value": 54302115,
                    "href": "http://en.wikipedia.org/w/index.php?search=Senegal",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Senegal</span><br />Population : 54302115"
                    }
                },
                "RS": {
                    "value": 35226904,
                    "href": "http://en.wikipedia.org/w/index.php?search=Serbia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Serbia</span><br />Population : 35226904"
                    }
                },
                "SC": {
                    "value": 2924264,
                    "href": "http://en.wikipedia.org/w/index.php?search=Seychelles",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Seychelles</span><br />Population : 2924264"
                    }
                },
                "SL": {
                    "value": 125592,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sierra Leone",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sierra Leone</span><br />Population : 125592"
                    }
                },
                "SG": {
                    "value": 57278104,
                    "href": "http://en.wikipedia.org/w/index.php?search=Singapore",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Singapore</span><br />Population : 57278104"
                    }
                },
                "SK": {
                    "value": 3953430,
                    "href": "http://en.wikipedia.org/w/index.php?search=Slovakia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovakia</span><br />Population : 3953430"
                    }
                },
                "SI": {
                    "value": 57084336,
                    "href": "http://en.wikipedia.org/w/index.php?search=Slovenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Slovenia</span><br />Population : 57084336"
                    }
                },
                "SO": {
                    "value": 7167059,
                    "href": "http://en.wikipedia.org/w/index.php?search=Somalia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Somalia</span><br />Population : 7167059"
                    }
                },
                "SD": {
                    "value": 4916787,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sudan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sudan</span><br />Population : 4916787"
                    }
                },
                "SS": {
                    "value": 50713745,
                    "href": "http://en.wikipedia.org/w/index.php?search=South Sudan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Sudan</span><br />Population : 50713745"
                    }
                },
                "LK": {
                    "value": 51227414,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sri Lanka",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sri Lanka</span><br />Population : 51227414"
                    }
                },
                "SE": {
                    "value": 1456378,
                    "href": "http://en.wikipedia.org/w/index.php?search=Sweden",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sweden</span><br />Population : 1456378"
                    }
                },
                "CH": {
                    "value": 171292,
                    "href": "http://en.wikipedia.org/w/index.php?search=Switzerland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Switzerland</span><br />Population : 171292"
                    }
                },
                "SR": {
                    "value": 16398474,
                    "href": "http://en.wikipedia.org/w/index.php?search=Suriname",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Suriname</span><br />Population : 16398474"
                    }
                },
                "SZ": {
                    "value": 13431625,
                    "href": "http://en.wikipedia.org/w/index.php?search=Swaziland",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Swaziland</span><br />Population : 13431625"
                    }
                },
                "SY": {
                    "value": 48509174,
                    "href": "http://en.wikipedia.org/w/index.php?search=Syrian Arab Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Syrian Arab Republic</span><br />Population : 48509174"
                    }
                },
                "TJ": {
                    "value": 56144742,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tajikistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tajikistan</span><br />Population : 56144742"
                    }
                },
                "TZ": {
                    "value": 11448242,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tanzania, United Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tanzania, United Republic Of</span><br />Population : 11448242"
                    }
                },
                "TD": {
                    "value": 1725094,
                    "href": "http://en.wikipedia.org/w/index.php?search=Chad",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Chad</span><br />Population : 1725094"
                    }
                },
                "CZ": {
                    "value": 4191070,
                    "href": "http://en.wikipedia.org/w/index.php?search=Czech Republic",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Czech Republic</span><br />Population : 4191070"
                    }
                },
                "TH": {
                    "value": 36190262,
                    "href": "http://en.wikipedia.org/w/index.php?search=Thailand",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Thailand</span><br />Population : 36190262"
                    }
                },
                "TL": {
                    "value": 56453675,
                    "href": "http://en.wikipedia.org/w/index.php?search=Timor-leste",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Timor-leste</span><br />Population : 56453675"
                    }
                },
                "TG": {
                    "value": 44185947,
                    "href": "http://en.wikipedia.org/w/index.php?search=Togo",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Togo</span><br />Population : 44185947"
                    }
                },
                "TO": {
                    "value": 53817694,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tonga",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tonga</span><br />Population : 53817694"
                    }
                },
                "TT": {
                    "value": 13310977,
                    "href": "http://en.wikipedia.org/w/index.php?search=Trinidad And Tobago",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Trinidad And Tobago</span><br />Population : 13310977"
                    }
                },
                "TN": {
                    "value": 22255395,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tunisia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tunisia</span><br />Population : 22255395"
                    }
                },
                "TM": {
                    "value": 19142306,
                    "href": "http://en.wikipedia.org/w/index.php?search=Turkmenistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkmenistan</span><br />Population : 19142306"
                    }
                },
                "TR": {
                    "value": 53254670,
                    "href": "http://en.wikipedia.org/w/index.php?search=Turkey",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Turkey</span><br />Population : 53254670"
                    }
                },
                "TV": {
                    "value": 30560013,
                    "href": "http://en.wikipedia.org/w/index.php?search=Tuvalu",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tuvalu</span><br />Population : 30560013"
                    }
                },
                "VU": {
                    "value": 49244031,
                    "href": "http://en.wikipedia.org/w/index.php?search=Vanuatu",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Vanuatu</span><br />Population : 49244031"
                    }
                },
                "VE": {
                    "value": 14572299,
                    "href": "http://en.wikipedia.org/w/index.php?search=Venezuela, Bolivarian Republic Of",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Venezuela, Bolivarian Republic Of</span><br />Population : 14572299"
                    }
                },
                "VN": {
                    "value": 8117620,
                    "href": "http://en.wikipedia.org/w/index.php?search=Viet Nam",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Viet Nam</span><br />Population : 8117620"
                    }
                },
                "UA": {
                    "value": 41140494,
                    "href": "http://en.wikipedia.org/w/index.php?search=Ukraine",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Ukraine</span><br />Population : 41140494"
                    }
                },
                "UY": {
                    "value": 8260205,
                    "href": "http://en.wikipedia.org/w/index.php?search=Uruguay",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Uruguay</span><br />Population : 8260205"
                    }
                },
                "YE": {
                    "value": 28604050,
                    "href": "http://en.wikipedia.org/w/index.php?search=Yemen",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Yemen</span><br />Population : 28604050"
                    }
                },
                "ZM": {
                    "value": 13872174,
                    "href": "http://en.wikipedia.org/w/index.php?search=Zambia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zambia</span><br />Population : 13872174"
                    }
                },
                "ZW": {
                    "value": 28205545,
                    "href": "http://en.wikipedia.org/w/index.php?search=Zimbabwe",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Zimbabwe</span><br />Population : 28205545"
                    }
                }
            },
            "plots": {
                "paris": {
                    "value": 1025415,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paris</span><br />Population: 1025415"
                    }
                },
                "newyork": {
                    "value": 785175,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New-York</span><br />Population: 785175"
                    }
                },
                "sydney": {
                    "value": 477087,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sydney</span><br />Population: 477087"
                    }
                },
                "brasilia": {
                    "value": 211212,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brasilia</span><br />Population: 211212"
                    }
                },
                "tokyo": {
                    "value": 433935,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tokyo</span><br />Population: 433935"
                    }
                }
            }
        }
    };

    // Default plots params
    var plots = {
        "paris": {
            "latitude": 48.86,
            "longitude": 2.3444,
            size: 16,
            "text": {
                "position": "left",
                "content": ""
            },
        },
        "newyork": {
            "latitude": 40.667,
            "longitude": -73.833,
            size: 6,
            "text": {
                "content": ""
            },
        },
        "sydney": {
            "latitude": -33.917,
            "longitude": 151.167,
            size: 12,
            "text": {
                "content": ""
            },
        },
        "brasilia": {
            "latitude": -15.781682,
            "longitude": -47.924195,
            size: 8,
            "text": {
                "content": ""
            },
        },
        "tokyo": {
            "latitude": 35.687418,
            "longitude": 139.692306,
            size: 20,
            "text": {
                "content": ""
            },
        },
        "london": {
            "latitude": 51.5073509,
            "longitude": -0.1277583,
            size: 8,
            "text": {
                "content": ""
            },
        }
    };

    // Knob initialisation (for selecting a year)
    $(".knob").knob({
        release: function (value) {
            return $('.map-year-'+value).click().focus();
        }
    });

    // Mapael initialisation
    $world = $(".world");
    $world.mapael({
        map: {
            name: "world_countries",
            defaultArea: {
                attrs: {
                    fill: "#e0e0e0",
                    stroke: "#fff",
                    "stroke-width": 2
                },
                attrsHover: {
                    fill: "#fce4ec",
                }
            },
            defaultPlot: {
                attrs: {
                    fill: "#f48fb1",
                    stroke: "#fff",
                    "stroke-width": 2
                },
                attrsHover: {
                    fill: "#e91e63",
                    stroke: "#fff",
                    "stroke-width": 2
                },
                text: {
                    attrs: {
                        fill: "#fff"
                    },
                    attrsHover: {
                        fill: "#fff",
                        "font-weight": "bold"
                    }
                }
            },
            zoom: {
                enabled: true
                , step: 0.25
                , maxLevel: 20
            }
        },
        plots: $.extend(true, {}, data[2009]['plots'], plots),
        areas: data[2009]['areas']
    });

    $(".world .zoomOut").click();

    $('.set-map-year').click(function () {
        var year = $(this).text();
        $(".world").trigger('update', [data[year], {}, {}, {animDuration: 300}]);
        $('.knob')
        .val(year)
        .trigger('change');
    });
});