import "../admin";
import "../components/admin";
import "../components/blocks";

import Rails from "@rails/ujs";
import * as Turbo from "@hotwired/turbo";
import * as ActiveStorage from "@rails/activestorage";

Rails.start();
Turbo.start();
ActiveStorage.start();
