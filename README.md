# gedit-nsis

[![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![GNU General Public License](https://img.shields.io/badge/license-GPL%20v2-orange.svg?style=flat-square)](http://www.gnu.org/licenses/gpl-2.0.html)
[![GitHub](https://img.shields.io/github/release/idleberg/gedit-nsis.svg?style=flat-square)](https://github.com/idleberg/gedit-nsis/releases)

[gedit](http://projects.gnome.org/gedit/) is the official text editor of the GNOME desktop environment. By default it only comes the most basic syntax highlighter for NSIS scripts.

> [!NOTE]
>
> This new language file supports NSIS up to v3.12

## Installation

Copy `nsis.lang` to the GtkSourceView language definitions directory:

```sh
# System-wide
sudo cp nsis.lang /usr/share/gtksourceview-4/language-specs/

# User-only
cp nsis.lang ~/.local/share/gtksourceview-4/language-specs/
```

> [!TIP]
>
> Replace `gtksourceview-4` with `gtksourceview-3.0` or `gtksourceview-5` depending on your version.

Restart gedit to activate the syntax highlighting.

## License

All code is licensed under [The MIT License](LICENSE).
