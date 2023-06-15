---
title: TODO
description: TODO
breadcrumbs: [Documentation, Families, TODO]
---

## Installation

::: info
This package requires [PHP](https://www.php.net/) 8.2 or later, and it supports [Laravel](https://laravel.com/) 10 or later.
:::

To get the latest version, simply require the project using [Composer](https://getcomposer.org/):

```bash
$ composer require bombenprodukt/blade-icons-phosphor-icons
```

## Usage

::: info
The prefix for all icon families in this package is `phosphor`. Please refer to the [resources/svg](https://github.com/BombenProdukt/blade-icons-phosphor-icons/tree/main/resources/svg) directory for a list of available styles and icons.
:::

### View Component

```blade
<x-phosphor:{style}-{icon} />
```

```blade
<x-phosphor:regular-flask />
```

### Dynamic Component

```blade
<x-dynamic-component component="phosphor:{{ $style }}-{{ $icon }}" />
```

```blade
<x-dynamic-component component="phosphor:regular-flask" />
```
