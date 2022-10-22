Feature: unifypage

  Scenario Outline: Test Login function pass
    Given tôi vào trang "https://platform-qa-5.unifimoney.net/login"
    Then tôi xác nhận rằng page có title "Log in"
    And tôi nhập vào ô cellphone <cphone> và ô password <pass>
    And tôi click vào nut Log in
    And tôi xác nhận rằng trang nhập OTP hiện ra với <giây> giây đếm ngược
    And tôi nhập số <securitycode> vào ô security code
    And tôi click vào nút Let's go!
    Then tôi xác nhận page "Home" được hiển thị

    Examples: 
      | cphone     | pass         | giây                    | securitycode |
      | 8320003188 | 123456789aA@ | 60 seconds remaining... |       111111 |

  Scenario Outline: Test Login function fail
    Given tôi vào trang "https://platform-qa-5.unifimoney.net/login"
    Then tôi xác nhận rằng page có title "Log in"
    And tôi nhập vào ô cellphone <cphone> và ô password <pass>
    And tôi click vào nut Log in
    Then tôi thấy error <message> được hiển thị

    Examples: 
      | cphone     | pass        | message                                                          |
      | 8320003188 | 123456789aA | The combination between phone number and password is not correct |

  Scenario Outline: Test Login function wrong securitycode
    Given tôi vào trang "https://platform-qa-5.unifimoney.net/login"
    Then tôi xác nhận rằng page có title "Log in"
    And tôi nhập vào ô cellphone <cphone> và ô password <pass>
    And tôi click vào nut Log in
    And tôi xác nhận rằng trang nhập OTP hiện ra với <giây> giây đếm ngược
    And tôi nhập số <securitycode> vào ô security code
    And tôi click vào nút Let's go!
    Then tôi xác nhận page "Home" được hiển thị

    Examples: 
      | cphone     | pass         | giây                    | securitycode |
      | 8320003188 | 123456789aA@ | 60 seconds remaining... |       111112 |