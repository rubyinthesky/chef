require 'test_helper'

class ReachoutControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get reachout_index_url
    assert_response :success
  end

end
