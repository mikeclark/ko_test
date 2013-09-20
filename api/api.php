<?php
    // api goes here.....
    if (isset($_GET['action']))
    {
        switch($_GET['action'])
        {
            case 'data1':
                $to_return = array();
                $to_return['name'] = 'Mike Clark';
                $to_return['address'] = '123 Main St';
                $to_return['city'] = 'Clayton';
                $to_return['state'] = 'NC';
                $to_return['phone'] = '919-234-2345';
                $to_return['email'] = 'mike@mike-clark.org';
                $to_return['age'] = 34;
                break;
            default:
                $to_return = 404;
                break;
        }

        exit(json_encode($to_return));
    }

?>