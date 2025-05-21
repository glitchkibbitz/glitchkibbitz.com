# -*- coding: utf-8 -*-
from lektor.pluginsystem import Plugin
from datetime import datetime

class NowPlugin(Plugin):
    name = 'now'
    description = u'Get the current date.'

    def on_setup_env(self, **extra):
        # Add a now variable to the environment
        now = datetime.now().date()
        self.env.jinja_env.globals.update(now=now)
