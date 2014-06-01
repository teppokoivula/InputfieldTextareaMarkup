Textarea Markup inputfield for ProcessWire CMS/CMF
==================================================

Textarea Markup inputfield for ProcessWire CMS/CMF.
Copyright (c) 2014 Teppo Koivula

Intended for outputting markup as help or commentary among other inputfields,
mainly in Page Edit context. Loosely based on InputfieldMarkup from core, but
extends textarea to allow overriding markup on a per page basis by superuser.

## Getting started

Copy (or clone with git) InputfieldTextareaMarkup folder to /site/modules/, go
to Admin > Modules, hit "Check for new modules" and install Textarea Markup.

After installing the module create new "Textarea" field and configure it to use
TextareaMarkup as it's inputfield. Via "Input" tab in field settings you can
set default output for the field and optionally hide field label entirely.

Fied output can be configured on a per-page basis by superusers, otherwise
default value from field settings is used. Output can contain text, HTML
markup and values from other fields.

To output values of other fields, embed names of those fields in your output
string using format {{field_name}}. Example:

`Hello world, I'm a {{template}}, my name is {{name}} and my ID is {{id}}!`

For basic-page with ID 1001 and name "About" this should output following:

`Hello world, I'm a basic-page, my name is About and my ID is 1001!`

## License

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.

(See included LICENSE file for full license text.)