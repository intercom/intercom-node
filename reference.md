# Reference
## Admins
<details><summary><code>client.admins.<a href="/src/api/resources/admins/client/Client.ts">identify</a>() -> Intercom.AdminWithApp | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


You can view the currently authorised admin along with the embedded app object (a "workspace" in legacy terminology).

> 🚧 Single Sign On
>
> If you are building a custom "Log in with Intercom" flow for your site, and you call the `/me` endpoint to identify the logged-in user, you should not accept any sign-ins from users with unverified email addresses as it poses a potential impersonation security risk.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admins.identify();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AdminsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admins.<a href="/src/api/resources/admins/client/Client.ts">away</a>({ ...params }) -> Intercom.Admin | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can set an Admin as away for the Inbox.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admins.away({
    admin_id: 1,
    away_mode_enabled: true,
    away_mode_reassign: true,
    away_status_reason_id: 12345
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ConfigureAwayAdminRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admins.<a href="/src/api/resources/admins/client/Client.ts">listAllActivityLogs</a>({ ...params }) -> Intercom.ActivityLogList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can get a log of activities by all admins in an app.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admins.listAllActivityLogs({
    created_at_after: "1677253093",
    created_at_before: "1677861493"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListAllActivityLogsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admins.<a href="/src/api/resources/admins/client/Client.ts">list</a>({ ...params }) -> Intercom.AdminList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of admins for a given workspace.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admins.list({
    display_avatar: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListAdminsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admins.<a href="/src/api/resources/admins/client/Client.ts">find</a>({ ...params }) -> Intercom.Admin | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can retrieve the details of a single admin.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admins.find({
    admin_id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.FindAdminRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## AI Content
<details><summary><code>client.aiContent.<a href="/src/api/resources/aiContent/client/Client.ts">listContentImportSources</a>() -> Intercom.ContentImportSourcesList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can retrieve a list of all content import sources for a workspace.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiContent.listContentImportSources();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.aiContent.<a href="/src/api/resources/aiContent/client/Client.ts">createContentImportSource</a>({ ...params }) -> Intercom.ContentImportSource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new content import source by sending a POST request to this endpoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiContent.createContentImportSource({
    url: "https://www.example.com"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateContentImportSourceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.aiContent.<a href="/src/api/resources/aiContent/client/Client.ts">getContentImportSource</a>({ ...params }) -> Intercom.ContentImportSource</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiContent.getContentImportSource({
    source_id: "source_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.GetContentImportSourceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.aiContent.<a href="/src/api/resources/aiContent/client/Client.ts">updateContentImportSource</a>({ ...params }) -> Intercom.ContentImportSource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update an existing content import source.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiContent.updateContentImportSource({
    source_id: "source_id",
    sync_behavior: "api",
    url: "https://www.example.com"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.UpdateContentImportSourceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.aiContent.<a href="/src/api/resources/aiContent/client/Client.ts">deleteContentImportSource</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a content import source by making a DELETE request this endpoint. This will also delete all external pages that were imported from this source.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiContent.deleteContentImportSource({
    source_id: "source_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.DeleteContentImportSourceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.aiContent.<a href="/src/api/resources/aiContent/client/Client.ts">listExternalPages</a>() -> Intercom.ExternalPagesList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can retrieve a list of all external pages for a workspace.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiContent.listExternalPages();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.aiContent.<a href="/src/api/resources/aiContent/client/Client.ts">createExternalPage</a>({ ...params }) -> Intercom.ExternalPage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new external page by sending a POST request to this endpoint. If an external page already exists with the specified source_id and external_id, it will be updated instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiContent.createExternalPage({
    title: "Test",
    html: "<html><body><h1>Test</h1></body></html>",
    url: "https://www.example.com",
    source_id: 44,
    external_id: "abc1234"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateExternalPageRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.aiContent.<a href="/src/api/resources/aiContent/client/Client.ts">getExternalPage</a>({ ...params }) -> Intercom.ExternalPage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can retrieve an external page.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiContent.getExternalPage({
    page_id: "page_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.GetExternalPageRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.aiContent.<a href="/src/api/resources/aiContent/client/Client.ts">updateExternalPage</a>({ ...params }) -> Intercom.ExternalPage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update an existing external page (if it was created via the API).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiContent.updateExternalPage({
    page_id: "page_id",
    title: "Test",
    html: "<html><body><h1>Test</h1></body></html>",
    url: "https://www.example.com",
    source_id: 47,
    external_id: "5678"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.UpdateExternalPageRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.aiContent.<a href="/src/api/resources/aiContent/client/Client.ts">deleteExternalPage</a>({ ...params }) -> Intercom.ExternalPage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sending a DELETE request for an external page will remove it from the content library UI and from being used for AI answers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiContent.deleteExternalPage({
    page_id: "page_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.DeleteExternalPageRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Articles
<details><summary><code>client.articles.<a href="/src/api/resources/articles/client/Client.ts">list</a>({ ...params }) -> core.Page<Intercom.ArticleListItem, Intercom.ArticleList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all articles by making a GET request to `https://api.intercom.io/articles`.

> 📘 How are the articles sorted and ordered?
>
> Articles will be returned in descending order on the `updated_at` attribute. This means if you need to iterate through results then we'll show the most recently updated articles first.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.articles.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.articles.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListArticlesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.articles.<a href="/src/api/resources/articles/client/Client.ts">create</a>({ ...params }) -> Intercom.Article</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new article by making a POST request to `https://api.intercom.io/articles`.

> 📘 Tags cannot be managed via the Articles API
>
> Article tags are read-only in responses. To create, update, or delete tags, use the Intercom UI or the Tags API endpoints.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.articles.create({
    title: "Thanks for everything",
    description: "Description of the Article",
    body: "Body of the Article",
    author_id: 991267497,
    state: "published",
    parent_id: 145,
    parent_type: "collection",
    translated_content: {
        fr: {
            title: "Merci pour tout",
            description: "Description de l'article",
            body: "Corps de l'article",
            author_id: 991267497,
            state: "published"
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateArticleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.articles.<a href="/src/api/resources/articles/client/Client.ts">find</a>({ ...params }) -> Intercom.Article</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single article by making a GET request to `https://api.intercom.io/articles/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.articles.find({
    article_id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.FindArticleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.articles.<a href="/src/api/resources/articles/client/Client.ts">update</a>({ ...params }) -> Intercom.Article</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update the details of a single article by making a PUT request to `https://api.intercom.io/articles/<id>`.

> 📘 Tags cannot be managed via the Articles API
>
> Article tags are read-only in responses. To create, update, or delete tags, use the Intercom UI or the Tags API endpoints.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.articles.update({
    article_id: 1,
    title: "Christmas is here!",
    body: "<p>New gifts in store for the jolly season</p>"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.UpdateArticleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.articles.<a href="/src/api/resources/articles/client/Client.ts">delete</a>({ ...params }) -> Intercom.DeletedArticleObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a single article by making a DELETE request to `https://api.intercom.io/articles/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.articles.delete({
    article_id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.DeleteArticleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.articles.<a href="/src/api/resources/articles/client/Client.ts">search</a>({ ...params }) -> Intercom.ArticleSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can search for articles by making a GET request to `https://api.intercom.io/articles/search`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.articles.search({
    phrase: "Getting started",
    state: "published",
    help_center_id: 1,
    highlight: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.SearchArticlesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Away Status Reasons
<details><summary><code>client.awayStatusReasons.<a href="/src/api/resources/awayStatusReasons/client/Client.ts">listAwayStatusReasons</a>() -> Intercom.AwayStatusReasonList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of all away status reasons configured for the workspace, including deleted ones.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.awayStatusReasons.listAwayStatusReasons();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AwayStatusReasonsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## ReportingDataExport
<details><summary><code>client.reportingDataExport.<a href="/src/api/resources/reportingDataExport/client/Client.ts">enqueueANewReportingDataExportJob</a>({ ...params }) -> Intercom.PostExportReportingDataEnqueueResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reportingDataExport.enqueueANewReportingDataExportJob({
    dataset_id: "conversation",
    attribute_ids: ["conversation_id", "conversation_started_at"],
    start_time: 1717490000,
    end_time: 1717510000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.PostExportReportingDataEnqueueRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportingDataExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.reportingDataExport.<a href="/src/api/resources/reportingDataExport/client/Client.ts">listAvailableDatasetsAndAttributes</a>() -> Intercom.GetExportReportingDataGetDatasetsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.reportingDataExport.listAvailableDatasetsAndAttributes();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ReportingDataExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Data Export
<details><summary><code>client.dataExport.<a href="/src/api/resources/dataExport/client/Client.ts">exportReportingData</a>({ ...params }) -> Intercom.DataExportExportReportingDataResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataExport.exportReportingData({
    job_identifier: "job_identifier",
    app_id: "app_id",
    client_id: "client_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ExportReportingDataRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.dataExport.<a href="/src/api/resources/dataExport/client/Client.ts">downloadReportingDataExport</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Download the data from a completed reporting data export job.

> Octet header required
>
> You will have to specify the header Accept: `application/octet-stream` when hitting this endpoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataExport.downloadReportingDataExport({
    job_identifier: "job_identifier",
    app_id: "app_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.DownloadReportingDataExportRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.dataExport.<a href="/src/api/resources/dataExport/client/Client.ts">create</a>({ ...params }) -> Intercom.DataExport</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

To create your export job, you need to send a `POST` request to the export endpoint `https://api.intercom.io/export/content/data`.

This endpoint exports **message delivery and engagement data** for outbound content (Emails, Posts, Custom Bots, Surveys, Tours, Series, and more). The exported data includes who received each message, when they received it, and how they engaged with it (opens, clicks, replies, completions, dismissals, unsubscribes, and bounces). It does not export raw message or conversation content.

The only parameters you need to provide are the range of dates that you want exported.

>🚧 Limit of one active job
>
> You can only have one active job per workspace. You will receive a HTTP status code of 429 with the message Exceeded rate limit of 1 pending message data export jobs if you attempt to create a second concurrent job.

>❗️ Updated_at not included
>
> It should be noted that the timeframe only includes messages sent during the time period and not messages that were only updated during this period. For example, if a message was updated yesterday but sent two days ago, you would need to set the created_at_after date before the message was sent to include that in your retrieval job.

>📘 Date ranges are inclusive
>
> Requesting data for 2018-06-01 until 2018-06-30 will get all data for those days including those specified - e.g. 2018-06-01 00:00:00 until 2018-06-30 23:59:99.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataExport.create({
    created_at_after: 1734519776,
    created_at_before: 1734537776
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateDataExportRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.dataExport.<a href="/src/api/resources/dataExport/client/Client.ts">find</a>({ ...params }) -> Intercom.DataExport</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can view the status of your job by sending a `GET` request to the URL
`https://api.intercom.io/export/content/data/{job_identifier}` - the `{job_identifier}` is the value returned in the response when you first created the export job. More on it can be seen in the Export Job Model.

> 🚧 Jobs expire after two days
> All jobs that have completed processing (and are thus available to download from the provided URL) will have an expiry limit of two days from when the export ob completed. After this, the data will no longer be available.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataExport.find({
    job_identifier: "job_identifier"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.FindDataExportRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.dataExport.<a href="/src/api/resources/dataExport/client/Client.ts">cancel</a>({ ...params }) -> Intercom.DataExport</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can cancel your job
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataExport.cancel({
    job_identifier: "job_identifier"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CancelDataExportRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.dataExport.<a href="/src/api/resources/dataExport/client/Client.ts">download</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

When a job has a status of complete, and thus a filled download_url, you can download your data by hitting that provided URL, formatted like so: https://api.intercom.io/download/content/data/xyz1234.

Your exported message data will be streamed continuously back down to you in a gzipped CSV format.

> 📘 Octet header required
>
> You will have to specify the header Accept: `application/octet-stream` when hitting this endpoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataExport.download({
    job_identifier: "job_identifier"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.DownloadDataExportRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Fin Agent
<details><summary><code>client.finAgent.<a href="/src/api/resources/finAgent/client/Client.ts">startFinConversation</a>({ ...params }) -> Intercom.StartFinConversationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Initialize Fin by passing it the user's message along with conversation history and user details.

These additional pieces of context will be used by Fin to provide a better and more contextual answer to the user.

{% admonition type="warning" %}
Please reach out to your accounts team to discuss access.
{% /admonition %}

Once Fin is initialized, it progresses through a series of statuses such as *thinking*, *awaiting_user_reply*, or *resolved* before ending with a status of *complete*.

During this workflow, the client should allow Fin to continue uninterrupted until a final *complete* status is returned via webhook, at which point control of the conversation passes back to the client.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.finAgent.startFinConversation({
    conversation_id: "ext-123",
    message: {
        author: "user",
        body: "How can I see my account details?",
        timestamp: "2025-01-24T10:01:20Z"
    },
    user: {
        id: "123456",
        name: "John Doe",
        email: "john.doe@example.com"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.StartFinConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FinAgentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.finAgent.<a href="/src/api/resources/finAgent/client/Client.ts">replyToFin</a>({ ...params }) -> Intercom.ReplyToFinResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Once Fin has returned a response to a user's message, its status will be `awaiting_user_reply`.

If a user replies, use this endpoint to send this response to Fin.

{% admonition type="warning" %}
Please reach out to your accounts team to discuss access.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.finAgent.replyToFin({
    conversation_id: "123456",
    message: {
        author: "user",
        body: "Here's the information you requested.",
        timestamp: "2025-01-24T09:01:00Z"
    },
    user: {
        id: "123456",
        name: "John Doe",
        email: "john.doe@example.com"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ReplyToFinRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FinAgentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.finAgent.<a href="/src/api/resources/finAgent/client/Client.ts">submitFinCsat</a>({ ...params }) -> Intercom.SubmitFinCsatResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Record a customer's satisfaction rating for a conversation, with an optional free-text
remark.

Fin decides *when* to ask for a rating — this reuses the CSAT settings on your Fin
workflow, not this API. When Fin asks, it fires a `csat_requested` event over webhooks or
SSE carrying the rating options to show the user. Present those options, then submit the
user's choice here.

Submitting the same rating again, with no new remark, is a no-op and stays successful,
so an at-least-once client can safely retry. Submitting a *different* rating updates the
stored rating while the update window is still open, and a first remark can be added to
an already-rated survey. Once a remark has been recorded the rating is locked and can no
longer be changed.

{% admonition type="warning" %}
Please reach out to your accounts team to discuss access.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.finAgent.submitFinCsat({
    conversation_id: "ext-123",
    rating: "amazing"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.SubmitFinCsatRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FinAgentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## HelpCenters
<details><summary><code>client.helpCenters.<a href="/src/api/resources/helpCenters/client/Client.ts">find</a>({ ...params }) -> Intercom.HelpCenter</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single Help Center by making a GET request to `https://api.intercom.io/help_center/help_center/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.helpCenters.find({
    help_center_id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.FindHelpCenterRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `HelpCentersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.helpCenters.<a href="/src/api/resources/helpCenters/client/Client.ts">list</a>({ ...params }) -> core.Page<Intercom.HelpCenter, Intercom.HelpCenterList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can list all Help Centers by making a GET request to `https://api.intercom.io/help_center/help_centers`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.helpCenters.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.helpCenters.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListHelpCentersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `HelpCentersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Internal Articles
<details><summary><code>client.internalArticles.<a href="/src/api/resources/internalArticles/client/Client.ts">listInternalArticles</a>() -> Intercom.InternalArticleList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all internal articles by making a GET request to `https://api.intercom.io/internal_articles`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.internalArticles.listInternalArticles();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `InternalArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.internalArticles.<a href="/src/api/resources/internalArticles/client/Client.ts">createInternalArticle</a>({ ...params }) -> Intercom.InternalArticle</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new internal article by making a POST request to `https://api.intercom.io/internal_articles`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.internalArticles.createInternalArticle({
    title: "Thanks for everything",
    body: "Body of the Article",
    author_id: 991266252,
    owner_id: 991266252
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateInternalArticleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InternalArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.internalArticles.<a href="/src/api/resources/internalArticles/client/Client.ts">retrieveInternalArticle</a>({ ...params }) -> Intercom.InternalArticle</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single internal article by making a GET request to `https://api.intercom.io/internal_articles/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.internalArticles.retrieveInternalArticle({
    internal_article_id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.RetrieveInternalArticleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InternalArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.internalArticles.<a href="/src/api/resources/internalArticles/client/Client.ts">updateInternalArticle</a>({ ...params }) -> Intercom.InternalArticle</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update the details of a single internal article by making a PUT request to `https://api.intercom.io/internal_articles/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.internalArticles.updateInternalArticle({
    internal_article_id: 1,
    title: "Christmas is here!",
    body: "<p>New gifts in store for the jolly season</p>"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.UpdateInternalArticleRequestBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InternalArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.internalArticles.<a href="/src/api/resources/internalArticles/client/Client.ts">deleteInternalArticle</a>({ ...params }) -> Intercom.DeletedInternalArticleObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a single internal article by making a DELETE request to `https://api.intercom.io/internal_articles/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.internalArticles.deleteInternalArticle({
    internal_article_id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.DeleteInternalArticleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InternalArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.internalArticles.<a href="/src/api/resources/internalArticles/client/Client.ts">searchInternalArticles</a>({ ...params }) -> Intercom.InternalArticleSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can search for internal articles by making a GET request to `https://api.intercom.io/internal_articles/search`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.internalArticles.searchInternalArticles({
    folder_id: "folder_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.SearchInternalArticlesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InternalArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## IP Allowlist
<details><summary><code>client.ipAllowlist.<a href="/src/api/resources/ipAllowlist/client/Client.ts">getIpAllowlist</a>() -> Intercom.IpAllowlist</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the current IP allowlist configuration for the workspace.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ipAllowlist.getIpAllowlist();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `IpAllowlistClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ipAllowlist.<a href="/src/api/resources/ipAllowlist/client/Client.ts">updateIpAllowlist</a>({ ...params }) -> Intercom.IpAllowlist</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update the IP allowlist configuration for the workspace.

{% admonition type="warning" name="Lockout Protection" %}
  The API will reject updates that would lock out the caller's IP address. Ensure your current IP is included in the allowlist when enabling the feature.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ipAllowlist.updateIpAllowlist({
    enabled: true,
    ip_allowlist: ["192.168.1.0/24", "10.0.0.1"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.IpAllowlist` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IpAllowlistClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Companies
<details><summary><code>client.companies.<a href="/src/api/resources/companies/client/Client.ts">retrieve</a>({ ...params }) -> Intercom.CompaniesRetrieveResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a single company by passing in `company_id` or `name`.

  `https://api.intercom.io/companies?name={name}`

  `https://api.intercom.io/companies?company_id={company_id}`

You can fetch all companies and filter by `segment_id` or `tag_id` as a query parameter.

  `https://api.intercom.io/companies?tag_id={tag_id}`

  `https://api.intercom.io/companies?segment_id={segment_id}`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.companies.retrieve({
    name: "my company",
    company_id: "12345",
    tag_id: "678910",
    segment_id: "98765",
    page: 1,
    per_page: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.RetrieveCompanyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.companies.<a href="/src/api/resources/companies/client/Client.ts">createOrUpdate</a>({ ...params }) -> Intercom.Company</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create or update a company.

Companies will be only visible in Intercom when there is at least one associated user.

Companies are looked up via `company_id` in a `POST` request, if not found via `company_id`, the new company will be created, if found, that company will be updated.

{% admonition type="warning" name="Using `company_id`" %}
  You can set a unique `company_id` value when creating a company. However, it is not possible to update `company_id`. Be sure to set a unique value once upon creation of the company.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.companies.createOrUpdate({
    name: "my company",
    company_id: "company_remote_id",
    remote_created_at: 1374138000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateOrUpdateCompanyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.companies.<a href="/src/api/resources/companies/client/Client.ts">find</a>({ ...params }) -> Intercom.Company</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a single company.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.companies.find({
    company_id: "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.FindCompanyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.companies.<a href="/src/api/resources/companies/client/Client.ts">update</a>({ ...params }) -> Intercom.Company</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update a single company using the Intercom provisioned `id`.

{% admonition type="warning" name="Using `company_id`" %}
  When updating a company it is not possible to update `company_id`. This can only be set once upon creation of the company.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.companies.update({
    company_id: "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632",
    body: {
        name: "my company",
        website: "http://www.mycompany.com/"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.UpdateCompanyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.companies.<a href="/src/api/resources/companies/client/Client.ts">delete</a>({ ...params }) -> Intercom.DeletedCompanyObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a single company.

This endpoint does not permanently remove the company. It archives the company record and detaches any contacts attached to it; the contacts themselves are not deleted. A `company.deleted` webhook is sent once archival completes.

The endpoint returns `200` with `"deleted": true` as soon as the request is accepted — archival is processed asynchronously.

{% admonition type="warning" %}
Third-party integrations that sync companies into Intercom (for example, Salesforce or Chargebee) will recreate any company deleted through this endpoint on their next sync. To prevent recreation, remove or filter the company at the source integration before deleting it via the API.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.companies.delete({
    company_id: "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.DeleteCompanyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.companies.<a href="/src/api/resources/companies/client/Client.ts">listAttachedContacts</a>({ ...params }) -> Intercom.CompanyAttachedContacts</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all contacts that belong to a company.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.companies.listAttachedContacts({
    company_id: "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListAttachedContactsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.companies.<a href="/src/api/resources/companies/client/Client.ts">listAttachedSegments</a>({ ...params }) -> Intercom.CompanyAttachedSegments</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all segments that belong to a company.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.companies.listAttachedSegments({
    company_id: "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListSegmentsAttachedToCompanyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.companies.<a href="/src/api/resources/companies/client/Client.ts">list</a>({ ...params }) -> core.Page<Intercom.Company, Intercom.CompanyList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can list companies. The company list is sorted by the `last_request_at` field and by default is ordered descending, most recently requested first.

Note that the API does not include companies who have no associated users in list responses.

When using the Companies endpoint and the pages object to iterate through the returned companies, there is a limit of 10,000 Companies that can be returned. If you need to list or iterate on more than 10,000 Companies, please use the [Scroll API](https://developers.intercom.com/reference#iterating-over-all-companies).
{% admonition type="warning" name="Pagination" %}
  You can use pagination to limit the number of results returned. The default is `20` results per page.
  See the [pagination section](https://developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/pagination/#pagination-for-list-apis) for more details on how to use the `starting_after` param.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.companies.list({
    page: 1,
    per_page: 1,
    order: "desc"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.companies.list({
    page: 1,
    per_page: 1,
    order: "desc"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListCompaniesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.companies.<a href="/src/api/resources/companies/client/Client.ts">scroll</a>({ ...params }) -> core.Page<Intercom.Company, Intercom.CompanyScroll | undefined></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

      The `list all companies` functionality does not work well for huge datasets, and can result in errors and performance problems when paging deeply. The Scroll API provides an efficient mechanism for iterating over all companies in a dataset.

- Each app can only have 1 scroll open at a time. You'll get an error message if you try to have more than one open per app.
- If the scroll isn't used for 1 minute, it expires and calls with that scroll param will fail
- If the end of the scroll is reached, "companies" will be empty and the scroll parameter will expire

{% admonition type="info" name="Scroll Parameter" %}
  You can get the first page of companies by simply sending a GET request to the scroll endpoint.
  For subsequent requests you will need to use the scroll parameter from the response.
{% /admonition %}
{% admonition type="danger" name="Scroll network timeouts" %}
  Since scroll is often used on large datasets network errors such as timeouts can be encountered. When this occurs you will see a HTTP 500 error with the following message:
  "Request failed due to an internal network error. Please restart the scroll operation."
  If this happens, you will need to restart your scroll query: It is not possible to continue from a specific point when using scroll.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.companies.scroll({
    scroll_param: "scroll_param"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.companies.scroll({
    scroll_param: "scroll_param"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ScrollCompaniesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.companies.<a href="/src/api/resources/companies/client/Client.ts">attachContact</a>({ ...params }) -> Intercom.Company</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can attach a company to a single contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.companies.attachContact({
    contact_id: "contact_id",
    id: "6762f09a1bb69f9f2193bb34"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.AttachContactToCompanyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.companies.<a href="/src/api/resources/companies/client/Client.ts">detachContact</a>({ ...params }) -> Intercom.Company</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can detach a company from a single contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.companies.detachContact({
    contact_id: "58a430d35458202d41b1e65b",
    company_id: "58a430d35458202d41b1e65b"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.DetachContactFromCompanyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Contacts
<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">listAttachedCompanies</a>({ ...params }) -> core.Page<Intercom.Company, Intercom.ContactAttachedCompanies></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of companies that are associated to a contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.contacts.listAttachedCompanies({
    contact_id: "63a07ddf05a32042dffac965",
    page: 1,
    per_page: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.contacts.listAttachedCompanies({
    contact_id: "63a07ddf05a32042dffac965",
    page: 1,
    per_page: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListAttachedCompaniesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">listAttachedSegments</a>({ ...params }) -> Intercom.ContactSegments</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of segments that are associated to a contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.listAttachedSegments({
    contact_id: "63a07ddf05a32042dffac965"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListSegmentsAttachedToContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">listAttachedSubscriptions</a>({ ...params }) -> Intercom.SubscriptionTypeList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of subscription types that are attached to a contact. These can be subscriptions that a user has 'opted-in' to or has 'opted-out' from, depending on the subscription type.
This will return a list of Subscription Type objects that the contact is associated with.

The data property will show a combined list of:

  1.Opt-out subscription types that the user has opted-out from.
  2.Opt-in subscription types that the user has opted-in to receiving.

**Note:** This endpoint only returns subscriptions where the contact has explicitly configured their preference. Subscriptions that are in the default state — where the contact has not made an explicit opt-in or opt-out choice — are not included in the response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.listAttachedSubscriptions({
    contact_id: "63a07ddf05a32042dffac965"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListAttachedSubscriptionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">attachSubscription</a>({ ...params }) -> Intercom.SubscriptionType</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can add a specific subscription to a contact. In Intercom, we have two different subscription types based on user consent - opt-out and opt-in:

  1.Attaching a contact to an opt-out subscription type will opt that user out from receiving messages related to that subscription type.

  2.Attaching a contact to an opt-in subscription type will opt that user in to receiving messages related to that subscription type.

This will return a subscription type model for the subscription type that was added to the contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.attachSubscription({
    contact_id: "63a07ddf05a32042dffac965",
    id: "37846",
    consent_type: "opt_in"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.AttachSubscriptionToContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">detachSubscription</a>({ ...params }) -> Intercom.SubscriptionType</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can remove a specific subscription from a contact. This will return a subscription type model for the subscription type that was removed from the contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.detachSubscription({
    contact_id: "63a07ddf05a32042dffac965",
    subscription_id: "37846"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.DetachSubscriptionFromContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">listAttachedTags</a>({ ...params }) -> Intercom.TagList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all tags that are attached to a specific contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.listAttachedTags({
    contact_id: "63a07ddf05a32042dffac965"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListTagsAttachedToContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">find</a>({ ...params }) -> Intercom.ContactsFindResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single contact.

{% admonition type="warning" name="Merged contacts" %}
  If a contact has been merged into another contact via the Merge endpoint (POST /contacts/merge), requesting it by its original ID will return a `404 Not Found` error. Use the merged-into contact's ID instead.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.find({
    contact_id: "63a07ddf05a32042dffac965"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.FindContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">update</a>({ ...params }) -> Intercom.ContactsUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update an existing contact (ie. user or lead).

{% admonition type="info" %}
  This endpoint handles both **contact updates** and **custom object associations**.

  See _`update a contact with an association to a custom object instance`_ in the request/response examples to see the custom object association format.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.update({
    contact_id: "63a07ddf05a32042dffac965",
    email: "joebloggs@intercom.io",
    name: "joe bloggs"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.UpdateContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">delete</a>({ ...params }) -> Intercom.ContactDeleted</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a single contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.delete({
    contact_id: "contact_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.DeleteContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">mergeLeadInUser</a>({ ...params }) -> Intercom.ContactsMergeLeadInUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can merge a contact with a `role` of `lead` into a contact with a `role` of `user`.

{% admonition type="warning" name="Merged contacts are not retrievable via the API" %}
  Once a merge is completed, the source contact (`from`) is permanently removed from the active contact list. This means:
  - **GET /contacts/{id}** — Requesting the source contact by its original ID will return a `404 Not Found` error.
  - **POST /contacts/search** — The source contact will not appear in search results, including queries filtered by `updated_at`.
  - **GET /contacts** — The source contact will not appear in list results.

  Only the target contact (`into`) remains accessible. If your application stores contact IDs, update them to use the target contact's ID after a merge.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.mergeLeadInUser({
    from: "6762f0d51bb69f9f2193bb7f",
    into: "6762f0d51bb69f9f2193bb80"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.MergeContactsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">search</a>({ ...params }) -> core.Page<Intercom.Contact, Intercom.ContactList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can search for multiple contacts by the value of their attributes in order to fetch exactly who you want.

To search for contacts, you need to send a `POST` request to `https://api.intercom.io/contacts/search`.

This will accept a query object in the body which will define your filters in order to search for contacts.

{% admonition type="warning" name="Optimizing search queries" %}
  Search queries can be complex, so optimizing them can help the performance of your search.
  Use the `AND` and `OR` operators to combine multiple filters to get the exact results you need and utilize
  pagination to limit the number of results returned. The default is `50` results per page.
  See the [pagination section](https://developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/pagination/#example-search-conversations-request) for more details on how to use the `starting_after` param.
{% /admonition %}
### Merged Contacts

Contacts that have been merged (via POST /contacts/merge) are excluded from search results. If a contact was recently merged into another, it will no longer appear in queries filtered by `updated_at` or any other field. Only the target contact from the merge remains searchable.

### Contact Creation Delay

If a contact has recently been created, there is a possibility that it will not yet be available when searching. This means that it may not appear in the response. This delay can take a few minutes. If you need to be instantly notified it is recommended to use webhooks and iterate to see if they match your search filters.

### Nesting & Limitations

You can nest these filters in order to get even more granular insights that pinpoint exactly what you need. Example: (1 OR 2) AND (3 OR 4).
There are some limitations to the amount of multiple's there can be:
* There's a limit of max 2 nested filters
* There's a limit of max 15 filters for each AND or OR group

### Searching for Timestamp Fields

Timestamp fields (`created_at`, `updated_at` etc.) and Date custom attributes are matched by calendar day. Sub-day precision (hour, minute, second) is not supported.

The day boundary uses **your workspace's timezone**, so the same query can return different results on two workspaces in different timezones.

Because the value is truncated to a day:

* `=` matches the whole day.
* `>` matches from the start of the *next* day, not from the instant you passed.
* `<` matches everything before the start of that day.

The `!=`, `>=`, `<=`, `IN` and `NIN` operators are not supported on Date fields and return an error.

**Example**, on a workspace set to UTC. Searching for `created_at` greater than `1577869200` (January 1st, 2020 9:00 AM UTC) truncates that value to `1577836800` (January 1st, 2020 12:00 AM UTC). Because `>` starts at the next day, the results begin from January 2nd, 2020 12:00 AM UTC - not from 9:00 AM on January 1st. On a workspace in another timezone, the boundaries fall on that timezone's midnight instead.

To get contacts created on January 1st, 2020, search for `created_at` equal to `1577836800`.

Only search queries behave this way. Responses still carry the full UNIX timestamp, and sorting uses the full value.

### Accepted Fields

Most key listed as part of the Contacts Model are searchable, whether writeable or not. The value you search for has to match the accepted type, otherwise the query will fail (ie. as `created_at` accepts a date, the `value` cannot be a string such as `"foorbar"`).

| Field                              | Type                           |
| ---------------------------------- | ------------------------------ |
| id                                 | String                         |
| role                               | String<br>Accepts user or lead |
| name                               | String                         |
| avatar                             | String                         |
| owner_id                           | Integer                        |
| email                              | String                         |
| email_domain                       | String                         |
| phone                              | String                         |
| external_id                        | String                         |
| created_at                         | Date (UNIX Timestamp)          |
| signed_up_at                       | Date (UNIX Timestamp)          |
| updated_at                         | Date (UNIX Timestamp)          |
| last_seen_at                       | Date (UNIX Timestamp)          |
| last_contacted_at                  | Date (UNIX Timestamp)          |
| last_replied_at                    | Date (UNIX Timestamp)          |
| last_email_opened_at               | Date (UNIX Timestamp)          |
| last_email_clicked_at              | Date (UNIX Timestamp)          |
| language_override                  | String                         |
| browser                            | String                         |
| browser_language                   | String                         |
| os                                 | String                         |
| location.country                   | String                         |
| location.region                    | String                         |
| location.city                      | String                         |
| unsubscribed_from_emails           | Boolean                        |
| marked_email_as_spam               | Boolean                        |
| has_hard_bounced                   | Boolean                        |
| ios_last_seen_at                   | Date (UNIX Timestamp)          |
| ios_app_version                    | String                         |
| ios_device                         | String                         |
| ios_app_device                     | String                         |
| ios_os_version                     | String                         |
| ios_app_name                       | String                         |
| ios_sdk_version                    | String                         |
| android_last_seen_at               | Date (UNIX Timestamp)          |
| android_app_version                | String                         |
| android_device                     | String                         |
| android_app_name                   | String                         |
| andoid_sdk_version                 | String                         |
| segment_id                         | String                         |
| tag_id                             | String                         |
| custom_attributes.{attribute_name} | String                         |

### Accepted Operators

{% admonition type="warning" name="Operators not supported on Date fields" %}
  Date fields (`created_at`, `updated_at`, and any Date custom attribute) do not support the `!=`, `>=`, or `<=` operators. Using them returns an error.
{% /admonition %}

The table below shows the operators you can use to define how you want to search for the value. The operator should be put in as a string (`"="`). Which operators are valid depends on the field's type - see the "Valid Types" column below. Searching by `tag_id` supports only the `=` and `!=` operators.

| Operator | Valid Types                        | Description                                                            |
| :------- | :---------------------------------- | :----------------------------------------------------------------------|
| =        | All                                  | Equals                                                                  |
| !=       | All except Date                      | Doesn't Equal                                                           |
| IN       | All except Date and tag_id           | In<br>Shortcut for `OR` queries<br>Values must be in Array              |
| NIN      | All except Date and tag_id           | Not In<br>Shortcut for `OR !` queries<br>Values must be in Array        |
| >        | Integer<br>Date             | Greater than<br>On Date fields, matches from the start of the next day |
| <        | Integer<br>Date             | Lower than<br>On Date fields, matches before the start of the day      |
| >=       | Integer                     | Greater than or equal to<br>Not supported on Date fields               |
| <=       | Integer                     | Lower than or equal to<br>Not supported on Date fields                 |
| ~        | String                               | Contains                                                                |
| !~       | String                               | Doesn't Contain                                                         |
| ^        | String                               | Starts With                                                             |
| $        | String                               | Ends With                                                               |
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.contacts.search({
    query: {
        operator: "AND",
        value: [{
                field: "created_at",
                operator: ">",
                value: "1306054154"
            }]
    },
    pagination: {
        per_page: 5
    }
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.contacts.search({
    query: {
        operator: "AND",
        value: [{
                field: "created_at",
                operator: ">",
                value: "1306054154"
            }]
    },
    pagination: {
        per_page: 5
    }
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.SearchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">list</a>({ ...params }) -> core.Page<Intercom.Contact, Intercom.ContactList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all contacts (ie. users or leads) in your workspace.
{% admonition type="info" name="Merged contacts" %}
  Contacts that have been merged (via POST /contacts/merge) will not appear in list results. Only the target contact from the merge remains accessible.
{% /admonition %}
{% admonition type="warning" name="Pagination" %}
  You can use pagination to limit the number of results returned. The default is `10` results per page, with a maximum of `150`.
  See the [pagination section](https://developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/pagination/#pagination-for-list-apis) for more details on how to use the `starting_after` param.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.contacts.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.contacts.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListContactsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">create</a>({ ...params }) -> Intercom.ContactsCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new contact (ie. user or lead).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.create({
    email: "joebloggs@intercom.io"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">showContactByExternalId</a>({ ...params }) -> Intercom.ShowContactByExternalIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single contact by external ID. Note that this endpoint only supports users and not leads.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.showContactByExternalId({
    external_id: "cdd29344-5e0c-4ef0-ac56-f9ba2979bc27"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ShowContactByExternalIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">archive</a>({ ...params }) -> Intercom.ContactArchived</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can archive a single contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.archive({
    contact_id: "63a07ddf05a32042dffac965"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ArchiveContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">unarchive</a>({ ...params }) -> Intercom.ContactUnarchived</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can unarchive a single contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.unarchive({
    contact_id: "63a07ddf05a32042dffac965"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.UnarchiveContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">blockContact</a>({ ...params }) -> Intercom.ContactBlocked</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Block a single contact.<br>**Note:** conversations of the contact will also be archived during the process.<br>More details in [FAQ How do I block Inbox spam?](https://www.intercom.com/help/en/articles/8838656-inbox-faqs)
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.blockContact({
    contact_id: "63a07ddf05a32042dffac965"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.BlockContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Notes
<details><summary><code>client.notes.<a href="/src/api/resources/notes/client/Client.ts">list</a>({ ...params }) -> core.Page<Intercom.Note, Intercom.NoteList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of notes that are associated to a contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.notes.list({
    contact_id: "contact_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.notes.list({
    contact_id: "contact_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListContactNotesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.notes.<a href="/src/api/resources/notes/client/Client.ts">create</a>({ ...params }) -> Intercom.Note</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can add a note to a single contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notes.create({
    contact_id: "123",
    body: "Hello",
    admin_id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateContactNoteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.notes.<a href="/src/api/resources/notes/client/Client.ts">find</a>({ ...params }) -> Intercom.Note</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single note.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notes.find({
    note_id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.FindNoteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Tags
<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">tagContact</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can tag a specific contact. This will return a tag object for the tag that was added to the contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.tagContact({
    contact_id: "63a07ddf05a32042dffac965",
    id: "7522907"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.TagContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">untagContact</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can remove tag from a specific contact. This will return a tag object for the tag that was removed from the contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.untagContact({
    contact_id: "63a07ddf05a32042dffac965",
    tag_id: "7522907"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.UntagContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">tagConversation</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can tag a specific conversation. This will return a tag object for the tag that was added to the conversation.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.tagConversation({
    conversation_id: "64619700005694",
    id: "7522907",
    admin_id: "780"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.TagConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">untagConversation</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can remove tag from a specific conversation. This will return a tag object for the tag that was removed from the conversation.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.untagConversation({
    conversation_id: "64619700005694",
    tag_id: "7522907",
    admin_id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.UntagConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">list</a>() -> Intercom.TagList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all tags for a given workspace.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">create</a>({ ...params }) -> Intercom.TagBasic</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can use this endpoint to perform the following operations:

  **1. Create a new tag:** You can create a new tag by passing in the tag name as specified in "Create or Update Tag Request Payload" described below.

  **2. Update an existing tag:** You can update an existing tag by passing the id of the tag as specified in "Create or Update Tag Request Payload" described below.

  **3. Tag Companies:** You can tag single company or a list of companies. You can tag a company by passing in the tag name and the company details as specified in "Tag Company Request Payload" described below. Also, if the tag doesn't exist then a new one will be created automatically.

  **4. Untag Companies:** You can untag a single company or a list of companies. You can untag a company by passing in the tag id and the company details as specified in "Untag Company Request Payload" described below.

  **5. Tag Multiple Users:** You can tag a list of users. You can tag the users by passing in the tag name and the user details as specified in "Tag Users Request Payload" described below.

Each operation will return a tag object.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.create({
    name: "test"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.TagsCreateRequestBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">find</a>({ ...params }) -> Intercom.TagBasic</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of tags that are on the workspace by their id.
This will return a tag object.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.find({
    tag_id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.FindTagRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">delete</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete the details of tags that are on the workspace by passing in the id.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.delete({
    tag_id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.DeleteTagRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">tagTicket</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can tag a specific ticket. This will return a tag object for the tag that was added to the ticket.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.tagTicket({
    ticket_id: "64619700005694",
    id: "7522907",
    admin_id: "780"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.TagTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">untagTicket</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can remove tag from a specific ticket. This will return a tag object for the tag that was removed from the ticket.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.untagTicket({
    ticket_id: "64619700005694",
    tag_id: "7522907",
    admin_id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.UntagTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Conversations
<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">list</a>({ ...params }) -> core.Page<Intercom.ConversationListItem, Intercom.ConversationList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all conversations.

You can optionally request the result page size and the cursor to start after to fetch the result.
{% admonition type="warning" name="Pagination" %}
  You can use pagination to limit the number of results returned. The default is `20` results per page.
  See the [pagination section](https://developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/pagination/#pagination-for-list-apis) for more details on how to use the `starting_after` param.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.conversations.list({
    per_page: 1,
    starting_after: "starting_after"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.conversations.list({
    per_page: 1,
    starting_after: "starting_after"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListConversationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">create</a>({ ...params }) -> Intercom.Message</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a conversation that has been initiated by a contact (ie. user or lead).
The conversation can be an in-app message only.

{% admonition type="info" name="Sending for visitors" %}
You can also send a message from a visitor by specifying their `user_id` or `id` value in the `from` field, along with a `type` field value of `contact`.
This visitor will be automatically converted to a contact with a lead role once the conversation is created.
{% /admonition %}

This will return the Message model that has been created.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.create({
    from: {
        type: "user",
        id: "6762f11b1bb69f9f2193bba3"
    },
    body: "Hello there"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">find</a>({ ...params }) -> Intercom.Conversation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


You can fetch the details of a single conversation.

This will return a single Conversation model with all its conversation parts.

{% admonition type="warning" name="Hard limit of 500 parts" %}
The maximum number of conversation parts that can be returned via the API is 500. If you have more than that we will return the 500 most recent conversation parts.
{% /admonition %}

For AI agent conversation metadata, please note that you need to have the agent enabled in your workspace, which is a [paid feature](https://www.intercom.com/help/en/articles/8205718-fin-resolutions#h_97f8c2e671).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.find({
    conversation_id: "123",
    display_as: "plaintext",
    include_translations: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.FindConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">update</a>({ ...params }) -> Intercom.Conversation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


You can update an existing conversation.

{% admonition type="info" name="Replying and other actions" %}
If you want to reply to a coveration or take an action such as assign, unassign, open, close or snooze, take a look at the reply and manage endpoints.
{% /admonition %}

{% admonition type="info" %}
  This endpoint handles both **conversation updates** and **custom object associations**.

  See _`update a conversation with an association to a custom object instance`_ in the request/response examples to see the custom object association format.
{% /admonition %}

{% admonition type="danger" name="Breaking change: duplicate custom attribute names" %}
The `PUT /conversations/{id}` endpoint now returns a `400 INVALID_PARAMETER` error when the request includes `custom_attributes` and your workspace contains multiple non-archived conversation custom attributes with the same name. Previously, the update would silently apply to a non-deterministic attribute. To resolve, rename or archive the duplicate attribute in your workspace settings, then retry the request.
{% /admonition %}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.update({
    conversation_id: "conversation_id",
    display_as: "plaintext",
    read: true,
    title: "new conversation title",
    custom_attributes: {
        "issue_type": "Billing",
        "priority": "High"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.UpdateConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">deleteConversation</a>({ ...params }) -> Intercom.ConversationDeleted</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

{% admonition type="warning" name="Irreversible operation" %}
Deleting a conversation is permanent and cannot be reversed.
{% /admonition %}

Deleting a conversation permanently removes it from the inbox. All sensitive data is deleted, including admin and user replies, conversation attributes, uploads, and related content. The conversation will still appear in reporting, though some data may be incomplete due to the deletion.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.deleteConversation({
    conversation_id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.DeleteConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">search</a>({ ...params }) -> core.Page<Intercom.ConversationListItem, Intercom.ConversationList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can search for multiple conversations by the value of their attributes in order to fetch exactly which ones you want.

To search for conversations, you need to send a `POST` request to `https://api.intercom.io/conversations/search`.

This will accept a query object in the body which will define your filters in order to search for conversations.
{% admonition type="warning" name="Optimizing search queries" %}
  Search queries can be complex, so optimizing them can help the performance of your search.
  Use the `AND` and `OR` operators to combine multiple filters to get the exact results you need and utilize
  pagination to limit the number of results returned. The default is `20` results per page and maximum is `150`.
  See the [pagination section](https://developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/pagination/#example-search-conversations-request) for more details on how to use the `starting_after` param.
{% /admonition %}

### Nesting & Limitations

You can nest these filters in order to get even more granular insights that pinpoint exactly what you need. Example: (1 OR 2) AND (3 OR 4).
There are some limitations to the amount of multiple's there can be:
- There's a limit of max 2 nested filters
- There's a limit of max 15 filters for each AND or OR group

### Accepted Fields

Most keys listed in the conversation model are searchable, whether writeable or not. The value you search for has to match the accepted type, otherwise the query will fail (ie. as `created_at` accepts a date, the `value` cannot be a string such as `"foorbar"`).
The `source.body` field is unique as the search will not be performed against the entire value, but instead against every element of the value separately. For example, when searching for a conversation with a `"I need support"` body - the query should contain a `=` operator with the value `"support"` for such conversation to be returned. A query with a `=` operator and a `"need support"` value will not yield a result.

| Field                                     | Type                                                                                                                                                   |
| :---------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                                        | String                                                                                                                                                 |
| created_at                                | Date (UNIX timestamp)                                                                                                                                  |
| updated_at                                | Date (UNIX timestamp)                                                                                                                                  |
| source.type                               | String<br>Accepted fields are `conversation`, `email`, `facebook`, `instagram`, `phone_call`, `phone_switch`, `push`, `sms`, `twitter` and `whatsapp`. |
| source.id                                 | String                                                                                                                                                 |
| source.delivered_as                       | String                                                                                                                                                 |
| source.subject                            | String                                                                                                                                                 |
| source.body                               | String                                                                                                                                                 |
| source.author.id                          | String                                                                                                                                                 |
| source.author.type                        | String                                                                                                                                                 |
| source.author.name                        | String                                                                                                                                                 |
| source.author.email                       | String                                                                                                                                                 |
| source.url                                | String                                                                                                                                                 |
| contact_ids                               | String                                                                                                                                                 |
| teammate_ids                              | String                                                                                                                                                 |
| admin_assignee_id                         | Integer                                                                                                                                                |
| team_assignee_id                          | Integer                                                                                                                                                |
| channel_initiated                         | String                                                                                                                                                 |
| open                                      | Boolean                                                                                                                                                |
| read                                      | Boolean                                                                                                                                                |
| state                                     | String                                                                                                                                                 |
| waiting_since                             | Date (UNIX timestamp)                                                                                                                                  |
| snoozed_until                             | Date (UNIX timestamp)                                                                                                                                  |
| tag_ids                                   | String                                                                                                                                                 |
| priority                                  | String                                                                                                                                                 |
| statistics.time_to_assignment             | Integer                                                                                                                                                |
| statistics.time_to_admin_reply            | Integer                                                                                                                                                |
| statistics.time_to_first_close            | Integer                                                                                                                                                |
| statistics.time_to_last_close             | Integer                                                                                                                                                |
| statistics.median_time_to_reply           | Integer                                                                                                                                                |
| statistics.first_contact_reply_at         | Date (UNIX timestamp)                                                                                                                                  |
| statistics.first_assignment_at            | Date (UNIX timestamp)                                                                                                                                  |
| statistics.first_admin_reply_at           | Date (UNIX timestamp)                                                                                                                                  |
| statistics.first_close_at                 | Date (UNIX timestamp)                                                                                                                                  |
| statistics.last_assignment_at             | Date (UNIX timestamp)                                                                                                                                  |
| statistics.last_assignment_admin_reply_at | Date (UNIX timestamp)                                                                                                                                  |
| statistics.last_contact_reply_at          | Date (UNIX timestamp)                                                                                                                                  |
| statistics.last_admin_reply_at            | Date (UNIX timestamp)                                                                                                                                  |
| statistics.last_close_at                  | Date (UNIX timestamp)                                                                                                                                  |
| statistics.last_closed_by_id              | String                                                                                                                                                 |
| statistics.count_reopens                  | Integer                                                                                                                                                |
| statistics.count_assignments              | Integer                                                                                                                                                |
| statistics.count_conversation_parts       | Integer                                                                                                                                                |
| conversation_rating.requested_at          | Date (UNIX timestamp)                                                                                                                                  |
| conversation_rating.replied_at            | Date (UNIX timestamp)                                                                                                                                  |
| conversation_rating.score                 | Integer                                                                                                                                                |
| conversation_rating.remark                | String                                                                                                                                                 |
| conversation_rating.contact_id            | String                                                                                                                                                 |
| conversation_rating.admin_d               | String                                                                                                                                                 |
| ai_agent_participated                     | Boolean                                                                                                                                                |
| ai_agent.resolution_state                 | String                                                                                                                                                 |
| ai_agent.last_answer_type                 | String                                                                                                                                                 |
| ai_agent.rating                           | Integer                                                                                                                                                |
| ai_agent.rating_remark                    | String                                                                                                                                                 |
| ai_agent.source_type                      | String                                                                                                                                                 |
| ai_agent.source_title                     | String                                                                                                                                                 |

### Accepted Operators

The table below shows the operators you can use to define how you want to search for the value.  The operator should be put in as a string (`"="`). The operator has to be compatible with the field's type  (eg. you cannot search with `>` for a given string value as it's only compatible for integer's and dates).

| Operator | Valid Types                    | Description                                                  |
| :------- | :----------------------------- | :----------------------------------------------------------- |
| =        | All                            | Equals                                                       |
| !=       | All                            | Doesn't Equal                                                |
| IN       | All                            | In  Shortcut for `OR` queries  Values most be in Array       |
| NIN      | All                            | Not In  Shortcut for `OR !` queries  Values must be in Array |
| >        | Integer  Date (UNIX Timestamp) | Greater (or equal) than                                      |
| <       | Integer  Date (UNIX Timestamp) | Lower (or equal) than                                        |
| ~        | String                         | Contains                                                     |
| !~       | String                         | Doesn't Contain                                              |
| ^        | String                         | Starts With                                                  |
| $        | String                         | Ends With                                                    |
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.conversations.search({
    query: {
        operator: "AND",
        value: [{
                field: "created_at",
                operator: ">",
                value: "1306054154"
            }]
    },
    pagination: {
        per_page: 5
    }
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.conversations.search({
    query: {
        operator: "AND",
        value: [{
                field: "created_at",
                operator: ">",
                value: "1306054154"
            }]
    },
    pagination: {
        per_page: 5
    }
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.SearchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">reply</a>({ ...params }) -> Intercom.Conversation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can reply to a conversation with a message from an admin or on behalf of a contact, or with a note for admins.

{% admonition type="warning" name="Bot replies to inbound email" %}
By default, bot or Operator replies to an inbound email conversation aren't sent to your customer. The reply is stored as an unnotifiable bot comment, and no `seen` receipt is generated until an email is actually delivered.

To send these replies as outbound emails, reach out to your accounts team to enable the email-reply feature flag for your workspace.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.reply({
    conversation_id: "123 or \"last\"",
    body: {
        message_type: "comment",
        type: "user",
        body: "Thanks again :)",
        intercom_user_id: "6762f1571bb69f9f2193bbbb"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ReplyToConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">manage</a>({ ...params }) -> Intercom.Conversation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

For managing conversations you can:
- Close a conversation
- Snooze a conversation to reopen on a future date
- Open a conversation which is `snoozed` or `closed`
- Assign a conversation to an admin and/or team.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.manage({
    conversation_id: "123",
    body: {
        message_type: "close",
        type: "admin",
        admin_id: "12345"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ManageConversationPartsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">attachContactAsAdmin</a>({ ...params }) -> Intercom.ConversationParticipantsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can add participants who are contacts to a conversation, on behalf of either another contact or an admin.

{% admonition type="warning" name="Contacts without an email" %}
If you add a contact via the email parameter and there is no user/lead found on that workspace with he given email, then we will create a new contact with `role` set to `lead`.
{% /admonition %}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.attachContactAsAdmin({
    conversation_id: "123",
    admin_id: "12345",
    customer: {
        intercom_user_id: "6762f19b1bb69f9f2193bbd4"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.AttachContactToConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">detachContactAsAdmin</a>({ ...params }) -> Intercom.ConversationParticipantsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can remove participants who are contacts from a group conversation, on behalf of an admin.

{% admonition type="warning" name="Removing the last participant" %}
You cannot remove the last remaining contact from a conversation.
{% /admonition %}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.detachContactAsAdmin({
    conversation_id: "123",
    contact_id: "123",
    admin_id: "5017690"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.DetachContactFromConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">redactConversationPart</a>({ ...params }) -> Intercom.Conversation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can redact a conversation part or the source message of a conversation (as seen in the source object).

{% admonition type="info" name="Redacting parts and messages" %}
If you are redacting a conversation part, it must have a `body`. If you are redacting a source message, it must have been created by a contact. We will return a `conversation_part_not_redactable` error if these criteria are not met.
{% /admonition %}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.redactConversationPart({
    type: "conversation_part",
    conversation_id: "19894788788",
    conversation_part_id: "19381789428"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.RedactConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">convertToTicket</a>({ ...params }) -> Intercom.Ticket | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can convert a conversation to a ticket.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.convertToTicket({
    conversation_id: 1,
    ticket_type_id: "53"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ConvertConversationToTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">runAssignmentRules</a>({ ...params }) -> Intercom.Conversation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

{% admonition type="danger" name="Deprecation of Run Assignment Rules" %}
Run assignment rules is now deprecated in version 2.12 and future versions and will be permanently removed on December 31, 2026. After this date, any requests made to this endpoint will fail.
{% /admonition %}
You can let a conversation be automatically assigned following assignment rules.
{% admonition type="warning" name="When using workflows" %}
It is not possible to use this endpoint with Workflows.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.runAssignmentRules({
    conversation_id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.AutoAssignConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Custom Object Instances
<details><summary><code>client.customObjectInstances.<a href="/src/api/resources/customObjectInstances/client/Client.ts">getCustomObjectInstancesByExternalId</a>({ ...params }) -> Intercom.CustomObjectInstance | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch a Custom Object Instance by external_id.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customObjectInstances.getCustomObjectInstancesByExternalId({
    custom_object_type_identifier: "Order",
    external_id: "external_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.GetCustomObjectInstancesByExternalIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomObjectInstancesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.customObjectInstances.<a href="/src/api/resources/customObjectInstances/client/Client.ts">createCustomObjectInstances</a>({ ...params }) -> Intercom.CustomObjectInstance | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create or update a custom object instance
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customObjectInstances.createCustomObjectInstances({
    custom_object_type_identifier: "Order",
    external_id: "123",
    external_created_at: 1392036272,
    external_updated_at: 1392036272,
    custom_attributes: {
        "order_number": "ORDER-12345",
        "total_amount": "custom_attributes"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateOrUpdateCustomObjectInstanceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomObjectInstancesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.customObjectInstances.<a href="/src/api/resources/customObjectInstances/client/Client.ts">deleteCustomObjectInstancesById</a>({ ...params }) -> Intercom.CustomObjectInstanceDeleted</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a single Custom Object instance by external_id.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customObjectInstances.deleteCustomObjectInstancesById({
    custom_object_type_identifier: "Order",
    external_id: "external_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.DeleteCustomObjectInstancesByIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomObjectInstancesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.customObjectInstances.<a href="/src/api/resources/customObjectInstances/client/Client.ts">getCustomObjectInstancesById</a>({ ...params }) -> Intercom.CustomObjectInstance | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch a Custom Object Instance by id.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customObjectInstances.getCustomObjectInstancesById({
    custom_object_type_identifier: "Order",
    custom_object_instance_id: "custom_object_instance_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.GetCustomObjectInstancesByIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomObjectInstancesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.customObjectInstances.<a href="/src/api/resources/customObjectInstances/client/Client.ts">deleteCustomObjectInstancesByExternalId</a>({ ...params }) -> Intercom.CustomObjectInstanceDeleted</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a single Custom Object instance using the Intercom defined id.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customObjectInstances.deleteCustomObjectInstancesByExternalId({
    custom_object_type_identifier: "Order",
    custom_object_instance_id: "custom_object_instance_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.DeleteCustomObjectInstancesByExternalIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomObjectInstancesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Data Attributes
<details><summary><code>client.dataAttributes.<a href="/src/api/resources/dataAttributes/client/Client.ts">list</a>({ ...params }) -> Intercom.DataAttributeList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all data attributes belonging to a workspace for contacts, companies or conversations.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataAttributes.list({
    model: "contact",
    include_archived: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListDataAttributesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataAttributesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.dataAttributes.<a href="/src/api/resources/dataAttributes/client/Client.ts">create</a>({ ...params }) -> Intercom.DataAttribute</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a data attributes for a `contact` or a `company`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataAttributes.create({
    data_type: "string"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateDataAttributeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataAttributesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.dataAttributes.<a href="/src/api/resources/dataAttributes/client/Client.ts">update</a>({ ...params }) -> Intercom.DataAttribute</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


You can update a data attribute.

> 🚧 Updating the data type is not possible
>
> It is currently a dangerous action to execute changing a data attribute's type via the API. You will need to update the type via the UI instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataAttributes.update({
    data_attribute_id: 1,
    body: {
        options: [{
                value: "1-10"
            }, {
                value: "11-20"
            }]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.UpdateDataAttributeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataAttributesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Events
<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">list</a>({ ...params }) -> Intercom.DataEventSummary</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


> 🚧
>
> Please note that you can only 'list' events that are less than 90 days old. Event counts and summaries will still include your events older than 90 days but you cannot 'list' these events individually if they are older than 90 days

The events belonging to a customer can be listed by sending a GET request to `https://api.intercom.io/events` with a user or lead identifier along with a `type` parameter. The identifier parameter can be one of `user_id`, `email` or `intercom_user_id`. The `type` parameter value must be `user`.

- `https://api.intercom.io/events?type=user&user_id={user_id}`
- `https://api.intercom.io/events?type=user&email={email}`
- `https://api.intercom.io/events?type=user&intercom_user_id={id}` (this call can be used to list leads)

The `email` parameter value should be [url encoded](http://en.wikipedia.org/wiki/Percent-encoding) when sending.

You can optionally define the result page size as well with the `per_page` parameter.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.events.list({
    user_id: "user_id",
    intercom_user_id: "intercom_user_id",
    email: "email",
    type: "type",
    summary: true,
    per_page: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListEventsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EventsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">create</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


You will need an Access Token that has write permissions to send Events. Once you have a key you can submit events via POST to the Events resource, which is located at https://api.intercom.io/events, or you can send events using one of the client libraries. When working with the HTTP API directly a client should send the event with a `Content-Type` of `application/json`.

When using the JavaScript API, [adding the code to your app](http://docs.intercom.io/configuring-Intercom/tracking-user-events-in-your-app) makes the Events API available. Once added, you can submit an event using the `trackEvent` method. This will associate the event with the Lead or currently logged-in user or logged-out visitor/lead and send it to Intercom. The final parameter is a map that can be used to send optional metadata about the event.

With the Ruby client you pass a hash describing the event to `Intercom::Event.create`, or call the `track_user` method directly on the current user object (e.g. `user.track_event`).

**NB: For the JSON object types, please note that we do not currently support nested JSON structure.**

| Type            | Description                                                                                                                                                                                                     | Example                                                                           |
| :-------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------- |
| String          | The value is a JSON String                                                                                                                                                                                      | `"source":"desktop"`                                                              |
| Number          | The value is a JSON Number                                                                                                                                                                                      | `"load": 3.67`                                                                    |
| Date            | The key ends with the String `_date` and the value is a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time), assumed to be in the [UTC](http://en.wikipedia.org/wiki/Coordinated_Universal_Time) timezone. | `"contact_date": 1392036272`                                                      |
| Link            | The value is a HTTP or HTTPS URI.                                                                                                                                                                               | `"article": "https://example.org/ab1de.html"`                                     |
| Rich Link       | The value is a JSON object that contains `url` and `value` keys.                                                                                                                                                | `"article": {"url": "https://example.org/ab1de.html", "value":"the dude abides"}` |
| Monetary Amount | The value is a JSON object that contains `amount` and `currency` keys. The `amount` key is a positive integer representing the amount in cents. The price in the example to the right denotes €349.99.          | `"price": {"amount": 34999, "currency": "eur"}`                                   |

**Lead Events**

When submitting events for Leads, you will need to specify the Lead's `id`.

**Metadata behaviour**

- We currently limit the number of tracked metadata keys to 10 per event. Once the quota is reached, we ignore any further keys we receive. The first 10 metadata keys are determined by the order in which they are sent in with the event.
- It is not possible to change the metadata keys once the event has been sent. A new event will need to be created with the new keys and you can archive the old one.
- There might be up to 24 hrs delay when you send a new metadata for an existing event.

**Event de-duplication**

The API may detect and ignore duplicate events. Each event is uniquely identified as a combination of the following data - the Workspace identifier, the Contact external identifier, the Data Event name and the Data Event created time. As a result, it is **strongly recommended** to send a second granularity Unix timestamp in the `created_at` field.

Duplicated events are responded to using the normal `202 Accepted` code - an error is not thrown, however repeat requests will be counted against any rate limit that is in place.

### HTTP API Responses

- Successful responses to submitted events return `202 Accepted` with an empty body.
- Unauthorised access will be rejected with a `401 Unauthorized` or `403 Forbidden` response code.
- Events sent about users that cannot be found will return a `404 Not Found`.
- Event lists containing duplicate events will have those duplicates ignored.
- Server errors will return a `500` response code and may contain an error message in the body.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.events.create({
    id: "8a88a590-e1c3-41e2-a502-e0649dbf721c",
    event_name: "invited-friend",
    created_at: 1671028894
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateDataEventRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EventsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">summaries</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create event summaries for a user. Event summaries are used to track the number of times an event has occurred, the first time it occurred and the last time it occurred.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.events.summaries();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListEventSummariesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EventsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Jobs
<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">status</a>({ ...params }) -> Intercom.Jobs</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the status of job execution.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.jobs.status({
    job_id: "job_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.JobsStatusRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Messages
<details><summary><code>client.messages.<a href="/src/api/resources/messages/client/Client.ts">create</a>({ ...params }) -> Intercom.Message</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a message that has been initiated by an admin. The conversation can be either an in-app message or an email.

> 🚧 Sending for visitors
>
> There can be a short delay between when a contact is created and when a contact becomes available to be messaged through the API. A 404 Not Found error will be returned in this case.

This will return the Message model that has been created.

> 🚧 Retrieving Associated Conversations
>
> As this is a message, there will be no conversation present until the contact responds. Once they do, you will have to search for a contact's conversations with the id of the message.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.messages.create({
    message_type: "email",
    subject: "Thanks for everything",
    body: "Hello there",
    template: "plain",
    from: {
        type: "admin",
        id: 394051
    },
    to: {
        type: "user",
        id: "536e564f316c83104c000020"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateMessageRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MessagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Segments
<details><summary><code>client.segments.<a href="/src/api/resources/segments/client/Client.ts">list</a>({ ...params }) -> Intercom.SegmentList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all segments.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.segments.list({
    include_count: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListSegmentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SegmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.segments.<a href="/src/api/resources/segments/client/Client.ts">find</a>({ ...params }) -> Intercom.Segment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single segment.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.segments.find({
    segment_id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.FindSegmentRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SegmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Subscription Types
<details><summary><code>client.subscriptionTypes.<a href="/src/api/resources/subscriptionTypes/client/Client.ts">list</a>() -> Intercom.SubscriptionTypeList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can list all subscription types. A list of subscription type objects will be returned.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptionTypes.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `SubscriptionTypesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## PhoneCallRedirects
<details><summary><code>client.phoneCallRedirects.<a href="/src/api/resources/phoneCallRedirects/client/Client.ts">create</a>({ ...params }) -> Intercom.PhoneSwitch | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can use the API to deflect phone calls to the Intercom Messenger.
Calling this endpoint will send an SMS with a link to the Messenger to the phone number specified.

If custom attributes are specified, they will be added to the user or lead's custom data attributes.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.phoneCallRedirects.create({
    phone: "+353832345678",
    custom_attributes: {
        "issue_type": "Billing",
        "priority": "High"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreatePhoneSwitchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PhoneCallRedirectsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Calls
<details><summary><code>client.calls.<a href="/src/api/resources/calls/client/Client.ts">listCalls</a>({ ...params }) -> Intercom.CallList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a paginated list of calls.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calls.listCalls({
    page: 1,
    per_page: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListCallsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.calls.<a href="/src/api/resources/calls/client/Client.ts">showCall</a>({ ...params }) -> Intercom.Call</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a single call by id.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calls.showCall({
    call_id: "call_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ShowCallRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.calls.<a href="/src/api/resources/calls/client/Client.ts">showCallRecording</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Redirects to a signed URL for the call's recording if it exists.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calls.showCallRecording({
    call_id: "call_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ShowCallRecordingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.calls.<a href="/src/api/resources/calls/client/Client.ts">showCallTranscript</a>({ ...params }) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the transcript for the specified call as a downloadable text file.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calls.showCallTranscript({
    call_id: "call_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ShowCallTranscriptRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.calls.<a href="/src/api/resources/calls/client/Client.ts">listCallsWithTranscripts</a>({ ...params }) -> Intercom.ListCallsWithTranscriptsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve calls by a list of conversation ids and include transcripts when available.
A maximum of 20 `conversation_ids` can be provided. If none are provided or more than 20 are provided, a 400 error is returned.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calls.listCallsWithTranscripts({
    conversation_ids: ["64619700005694", "64619700005695"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListCallsWithTranscriptsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Teams
<details><summary><code>client.teams.<a href="/src/api/resources/teams/client/Client.ts">list</a>() -> Intercom.TeamList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This will return a list of team objects for the App.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.teams.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `TeamsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.teams.<a href="/src/api/resources/teams/client/Client.ts">find</a>({ ...params }) -> Intercom.Team</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single team, containing an array of admins that belong to this team.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.teams.find({
    team_id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.FindTeamRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticket States
<details><summary><code>client.ticketStates.<a href="/src/api/resources/ticketStates/client/Client.ts">listTicketStates</a>() -> Intercom.TicketStateList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can get a list of all ticket states for a workspace.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketStates.listTicketStates();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `TicketStatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticket Types
<details><summary><code>client.ticketTypes.<a href="/src/api/resources/ticketTypes/client/Client.ts">list</a>() -> Intercom.TicketTypeList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can get a list of all ticket types for a workspace.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketTypes.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `TicketTypesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketTypes.<a href="/src/api/resources/ticketTypes/client/Client.ts">create</a>({ ...params }) -> Intercom.TicketType | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new ticket type.
> 📘 Creating ticket types.
>
> Every ticket type will be created with two default attributes: _default_title_ and _default_description_.
> For the `icon` propery, use an emoji from [Twemoji Cheatsheet](https://twemoji-cheatsheet.vercel.app/)
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketTypes.create({
    name: "Customer Issue",
    description: "Customer Report Template",
    category: "Customer",
    icon: "\uD83C\uDF9F\uFE0F"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateTicketTypeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketTypesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketTypes.<a href="/src/api/resources/ticketTypes/client/Client.ts">get</a>({ ...params }) -> Intercom.TicketType | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single ticket type.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketTypes.get({
    ticket_type_id: "ticket_type_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.FindTicketTypeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketTypesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketTypes.<a href="/src/api/resources/ticketTypes/client/Client.ts">update</a>({ ...params }) -> Intercom.TicketType | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


You can update a ticket type.

> 📘 Updating a ticket type.
>
> For the `icon` propery, use an emoji from [Twemoji Cheatsheet](https://twemoji-cheatsheet.vercel.app/)
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketTypes.update({
    ticket_type_id: "ticket_type_id",
    name: "Bug Report 2"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.UpdateTicketTypeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketTypesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Tickets
<details><summary><code>client.tickets.<a href="/src/api/resources/tickets/client/Client.ts">reply</a>({ ...params }) -> Intercom.TicketReply</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can reply to a ticket with a message from an admin or on behalf of a contact, or with a note for admins.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tickets.reply({
    ticket_id: "123",
    body: {
        message_type: "comment",
        type: "user",
        body: "Thanks again :)",
        intercom_user_id: "6762f2971bb69f9f2193bc49"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ReplyToTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tickets.<a href="/src/api/resources/tickets/client/Client.ts">create</a>({ ...params }) -> Intercom.Ticket | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new ticket.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tickets.create({
    ticket_type_id: "1234",
    contacts: [{
            id: "6762f2d81bb69f9f2193bc54"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tickets.<a href="/src/api/resources/tickets/client/Client.ts">enqueueCreateTicket</a>({ ...params }) -> Intercom.Jobs</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Enqueues ticket creation for asynchronous processing, returning if the job was enqueued successfully to be processed. We attempt to perform a best-effort validation on inputs before tasks are enqueued. If the given parameters are incorrect, we won't enqueue the job.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tickets.enqueueCreateTicket({
    ticket_type_id: "1234",
    contacts: [{
            id: "6762f2d81bb69f9f2193bc54"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.EnqueueCreateTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tickets.<a href="/src/api/resources/tickets/client/Client.ts">get</a>({ ...params }) -> Intercom.Ticket | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single ticket.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tickets.get({
    ticket_id: "ticket_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.FindTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tickets.<a href="/src/api/resources/tickets/client/Client.ts">update</a>({ ...params }) -> Intercom.Ticket | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update a ticket.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tickets.update({
    ticket_id: "ticket_id",
    ticket_attributes: {
        "_default_title_": "example",
        "_default_description_": "there is a problem"
    },
    ticket_state_id: "123",
    open: true,
    snoozed_until: 1673609604,
    admin_id: 991268011,
    assignee_id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.UpdateTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tickets.<a href="/src/api/resources/tickets/client/Client.ts">deleteTicket</a>({ ...params }) -> Intercom.TicketDeleted</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

{% admonition type="warning" name="Irreversible operation" %}
Deleting a ticket is permanent and cannot be reversed.
{% /admonition %}

Deleting a ticket permanently removes it from the inbox. All sensitive data is deleted, including admin and user replies, ticket attributes, uploads, and related content. The ticket will still appear in reporting, though some data may be incomplete due to the deletion.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tickets.deleteTicket({
    ticket_id: "ticket_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.DeleteTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tickets.<a href="/src/api/resources/tickets/client/Client.ts">search</a>({ ...params }) -> core.Page<(Intercom.Ticket | undefined), Intercom.TicketList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can search for multiple tickets by the value of their attributes in order to fetch exactly which ones you want.

To search for tickets, you send a `POST` request to `https://api.intercom.io/tickets/search`.

This will accept a query object in the body which will define your filters.
{% admonition type="warning" name="Optimizing search queries" %}
  Search queries can be complex, so optimizing them can help the performance of your search.
  Use the `AND` and `OR` operators to combine multiple filters to get the exact results you need and utilize
  pagination to limit the number of results returned. The default is `20` results per page.
  See the [pagination section](https://developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/pagination/#example-search-conversations-request) for more details on how to use the `starting_after` param.
{% /admonition %}

### Nesting & Limitations

You can nest these filters in order to get even more granular insights that pinpoint exactly what you need. Example: (1 OR 2) AND (3 OR 4).
There are some limitations to the amount of multiples there can be:
- There's a limit of max 2 nested filters
- There's a limit of max 15 filters for each AND or OR group

### Accepted Fields

Most keys listed as part of the Ticket model are searchable, whether writeable or not. The value you search for has to match the accepted type, otherwise the query will fail (ie. as `created_at` accepts a date, the `value` cannot be a string such as `"foobar"`).
The `source.body` field is unique as the search will not be performed against the entire value, but instead against every element of the value separately. For example, when searching for a conversation with a `"I need support"` body - the query should contain a `=` operator with the value `"support"` for such conversation to be returned. A query with a `=` operator and a `"need support"` value will not yield a result.

| Field                                     | Type                                                                                     |
| :---------------------------------------- | :--------------------------------------------------------------------------------------- |
| id                                        | String                                                                                   |
| created_at                                | Date (UNIX timestamp)                                                                    |
| updated_at                                | Date (UNIX timestamp)                                                                    |
| title                           | String                                                                                   |
| description                     | String                                                                                   |
| category                                  | String                                                                                   |
| ticket_type_id                            | String                                                                                   |
| contact_ids                               | String                                                                                   |
| teammate_ids                              | String                                                                                   |
| admin_assignee_id                         | String                                                                                   |
| team_assignee_id                          | String                                                                                   |
| open                                      | Boolean                                                                                  |
| state                                     | String                                                                                   |
| snoozed_until                             | Date (UNIX timestamp)                                                                    |
| ticket_attribute.{id}                     | String or Boolean or Date (UNIX timestamp) or Float or Integer                           |

{% admonition type="info" name="Searching by Category" %}
When searching for tickets by the **`category`** field, specific terms must be used instead of the category names:
* For **Customer** category tickets, use the term `request`.
* For **Back-office** category tickets, use the term `task`.
* For **Tracker** category tickets, use the term `tracker`.
{% /admonition %}

### Accepted Operators

{% admonition type="info" name="Searching based on `created_at`" %}
  You may use the `<=` or `>=` operators to search by `created_at`.
{% /admonition %}

The table below shows the operators you can use to define how you want to search for the value.  The operator should be put in as a string (`"="`). The operator has to be compatible with the field's type  (eg. you cannot search with `>` for a given string value as it's only compatible for integer's and dates).

| Operator | Valid Types                    | Description                                                  |
| :------- | :----------------------------- | :----------------------------------------------------------- |
| =        | All                            | Equals                                                       |
| !=       | All                            | Doesn't Equal                                                |
| IN       | All                            | In  Shortcut for `OR` queries  Values most be in Array       |
| NIN      | All                            | Not In  Shortcut for `OR !` queries  Values must be in Array |
| >        | Integer  Date (UNIX Timestamp) | Greater (or equal) than                                      |
| <       | Integer  Date (UNIX Timestamp) | Lower (or equal) than                                        |
| ~        | String                         | Contains                                                     |
| !~       | String                         | Doesn't Contain                                              |
| ^        | String                         | Starts With                                                  |
| $        | String                         | Ends With                                                    |
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.tickets.search({
    query: {
        operator: "AND",
        value: [{
                field: "created_at",
                operator: ">",
                value: "1306054154"
            }]
    },
    pagination: {
        per_page: 5
    }
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.tickets.search({
    query: {
        operator: "AND",
        value: [{
                field: "created_at",
                operator: ">",
                value: "1306054154"
            }]
    },
    pagination: {
        per_page: 5
    }
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.SearchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Visitors
<details><summary><code>client.visitors.<a href="/src/api/resources/visitors/client/Client.ts">find</a>({ ...params }) -> Intercom.Visitor | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single visitor.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.visitors.find({
    user_id: "user_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.FindVisitorRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VisitorsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.visitors.<a href="/src/api/resources/visitors/client/Client.ts">update</a>({ ...params }) -> Intercom.Visitor | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sending a PUT request to `/visitors` will result in an update of an existing Visitor.

**Option 1.** You can update a visitor by passing in the `user_id` of the visitor in the Request body.

**Option 2.** You can update a visitor by passing in the `id` of the visitor in the Request body.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.visitors.update({
    id: "6762f30c1bb69f9f2193bc5e",
    name: "Gareth Bale"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.UpdateVisitorRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VisitorsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.visitors.<a href="/src/api/resources/visitors/client/Client.ts">mergeToContact</a>({ ...params }) -> Intercom.Contact</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can merge a Visitor to a Contact of role type `lead` or `user`.

> 📘 What happens upon a visitor being converted?
>
> If the User exists, then the Visitor will be merged into it, the Visitor deleted and the User returned. If the User does not exist, the Visitor will be converted to a User, with the User identifiers replacing it's Visitor identifiers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.visitors.mergeToContact({
    type: "user",
    user: {
        id: "8a88a590-e1c3-41e2-a502-e0649dbf721c",
        email: "foo@bar.com"
    },
    visitor: {
        user_id: "3ecf64d0-9ed1-4e9f-88e1-da7d6e6782f3"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.MergeVisitorToContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VisitorsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## HelpCenters Collections
<details><summary><code>client.helpCenters.collections.<a href="/src/api/resources/helpCenters/resources/collections/client/Client.ts">list</a>({ ...params }) -> core.Page<Intercom.Collection, Intercom.CollectionList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all collections by making a GET request to `https://api.intercom.io/help_center/collections`.

Collections will be returned in descending order on the `updated_at` attribute. This means if you need to iterate through results then we'll show the most recently updated collections first.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.helpCenters.collections.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.helpCenters.collections.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.helpCenters.ListCollectionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CollectionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.helpCenters.collections.<a href="/src/api/resources/helpCenters/resources/collections/client/Client.ts">create</a>({ ...params }) -> Intercom.Collection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new collection by making a POST request to `https://api.intercom.io/help_center/collections.`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.helpCenters.collections.create({
    name: "Thanks for everything"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.helpCenters.CreateCollectionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CollectionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.helpCenters.collections.<a href="/src/api/resources/helpCenters/resources/collections/client/Client.ts">find</a>({ ...params }) -> Intercom.Collection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single collection by making a GET request to `https://api.intercom.io/help_center/collections/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.helpCenters.collections.find({
    collection_id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.helpCenters.FindCollectionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CollectionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.helpCenters.collections.<a href="/src/api/resources/helpCenters/resources/collections/client/Client.ts">update</a>({ ...params }) -> Intercom.Collection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update the details of a single collection by making a PUT request to `https://api.intercom.io/collections/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.helpCenters.collections.update({
    collection_id: 1,
    name: "Update collection name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.helpCenters.UpdateCollectionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CollectionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.helpCenters.collections.<a href="/src/api/resources/helpCenters/resources/collections/client/Client.ts">delete</a>({ ...params }) -> Intercom.DeletedCollectionObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a single collection by making a DELETE request to `https://api.intercom.io/collections/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.helpCenters.collections.delete({
    collection_id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.helpCenters.DeleteCollectionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CollectionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## News Items
<details><summary><code>client.news.items.<a href="/src/api/resources/news/resources/items/client/Client.ts">list</a>() -> Intercom.PaginatedResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all news items
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.news.items.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.news.items.<a href="/src/api/resources/news/resources/items/client/Client.ts">create</a>({ ...params }) -> Intercom.NewsItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a news item
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.news.items.create({
    title: "Halloween is here!",
    body: "<p>New costumes in store for this spooky season</p>",
    sender_id: 991267834,
    state: "live",
    deliver_silently: true,
    labels: ["Product", "Update", "New"],
    reactions: ["\uD83D\uDE06", "\uD83D\uDE05"],
    newsfeed_assignments: [{
            newsfeed_id: 53,
            published_at: 1664638214
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.NewsItemRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.news.items.<a href="/src/api/resources/news/resources/items/client/Client.ts">find</a>({ ...params }) -> Intercom.NewsItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single news item.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.news.items.find({
    news_item_id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.news.FindNewsItemRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.news.items.<a href="/src/api/resources/news/resources/items/client/Client.ts">update</a>({ ...params }) -> Intercom.NewsItem</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.news.items.update({
    news_item_id: 1,
    body: {
        title: "Christmas is here!",
        body: "<p>New gifts in store for the jolly season</p>",
        sender_id: 991267845,
        reactions: ["\uD83D\uDE1D", "\uD83D\uDE02"]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.news.UpdateNewsItemRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.news.items.<a href="/src/api/resources/news/resources/items/client/Client.ts">delete</a>({ ...params }) -> Intercom.DeletedObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a single news item.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.news.items.delete({
    news_item_id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.news.DeleteNewsItemRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## News Feeds
<details><summary><code>client.news.feeds.<a href="/src/api/resources/news/resources/feeds/client/Client.ts">listItems</a>({ ...params }) -> Intercom.PaginatedResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all news items that are live on a given newsfeed
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.news.feeds.listItems({
    newsfeed_id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.news.ListNewsFeedItemsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FeedsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.news.feeds.<a href="/src/api/resources/news/resources/feeds/client/Client.ts">list</a>() -> Intercom.PaginatedResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all newsfeeds
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.news.feeds.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `FeedsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.news.feeds.<a href="/src/api/resources/news/resources/feeds/client/Client.ts">find</a>({ ...params }) -> Intercom.Newsfeed</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single newsfeed
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.news.feeds.find({
    newsfeed_id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.news.FindNewsFeedRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FeedsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Admins
<details><summary><code>client.preview.admins.<a href="/src/api/resources/preview/resources/admins/client/Client.ts">identifyAdmin</a>() -> Intercom.AdminWithApp | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


You can view the currently authorised admin along with the embedded app object (a "workspace" in legacy terminology).

> 🚧 Single Sign On
>
> If you are building a custom "Log in with Intercom" flow for your site, and you call the `/me` endpoint to identify the logged-in user, you should not accept any sign-ins from users with unverified email addresses as it poses a potential impersonation security risk.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.admins.identifyAdmin();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AdminsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.admins.<a href="/src/api/resources/preview/resources/admins/client/Client.ts">setAwayAdmin</a>({ ...params }) -> Intercom.Admin | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can set an Admin as away for the Inbox.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.admins.setAwayAdmin({
    id: 1,
    away_mode_enabled: true,
    away_mode_reassign: true,
    away_status_reason_id: 12345
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.SetAwayAdminRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.admins.<a href="/src/api/resources/preview/resources/admins/client/Client.ts">listActivityLogs</a>({ ...params }) -> Intercom.ActivityLogList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can get a log of activities by all admins in an app.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.admins.listActivityLogs({
    created_at_after: "1677253093",
    created_at_before: "1677861493"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListActivityLogsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.admins.<a href="/src/api/resources/preview/resources/admins/client/Client.ts">searchActivityLogs</a>({ ...params }) -> Intercom.ActivityLogList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search and filter admin activity logs using a POST request with event type filter in the request body. You can find more details about the available event types in the List all activity log event types endpoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.admins.searchActivityLogs({
    created_at_after: 1677253093,
    created_at_before: 1677861493,
    event_types: ["app_name_change", "message_state_change"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.SearchActivityLogsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.admins.<a href="/src/api/resources/preview/resources/admins/client/Client.ts">listActivityLogEventTypes</a>() -> Intercom.ActivityLogEventTypeList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can get a list of all activity log event types. This is useful for discovering valid values to use with the `event_types` filter on the List all activity logs endpoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.admins.listActivityLogEventTypes();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AdminsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.admins.<a href="/src/api/resources/preview/resources/admins/client/Client.ts">listAdmins</a>({ ...params }) -> Intercom.AdminList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of admins for a given workspace.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.admins.listAdmins({
    display_avatar: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListAdminsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.admins.<a href="/src/api/resources/preview/resources/admins/client/Client.ts">retrieveAdmin</a>({ ...params }) -> Intercom.Admin | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can retrieve the details of a single admin.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.admins.retrieveAdmin({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.RetrieveAdminRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.admins.<a href="/src/api/resources/preview/resources/admins/client/Client.ts">removeAdmin</a>({ ...params }) -> Intercom.RemoveAdminResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can remove a single admin (teammate) from your workspace.
Requires the `remove_admins` OAuth scope.

This removes the admin's access to the workspace and reassigns their
work — auto-messages, ownership, article authorship, and conversation
replies — to the admins named by the `reassign_*` parameters.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.admins.removeAdmin({
    admin_id: 1,
    reassign_messages_admin_id: 1,
    reassign_owner_admin_id: 1,
    reassign_articles_author_id: 1,
    reassign_conversations_admin_id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.RemoveAdminRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## AI Content
<details><summary><code>client.preview.aiContent.<a href="/src/api/resources/preview/resources/aiContent/client/Client.ts">listContentImportSources</a>() -> Intercom.ContentImportSourcesList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can retrieve a list of all content import sources for a workspace.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.aiContent.listContentImportSources();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.aiContent.<a href="/src/api/resources/preview/resources/aiContent/client/Client.ts">createContentImportSource</a>({ ...params }) -> Intercom.ContentImportSource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new content import source by sending a POST request to this endpoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.aiContent.createContentImportSource({
    url: "https://www.example.com"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.CreateContentImportSourceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.aiContent.<a href="/src/api/resources/preview/resources/aiContent/client/Client.ts">getContentImportSource</a>({ ...params }) -> Intercom.ContentImportSource</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.aiContent.getContentImportSource({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.GetContentImportSourceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.aiContent.<a href="/src/api/resources/preview/resources/aiContent/client/Client.ts">updateContentImportSource</a>({ ...params }) -> Intercom.ContentImportSource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update an existing content import source.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.aiContent.updateContentImportSource({
    id: "id",
    sync_behavior: "api",
    url: "https://www.example.com"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.UpdateContentImportSourceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.aiContent.<a href="/src/api/resources/preview/resources/aiContent/client/Client.ts">deleteContentImportSource</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a content import source by making a DELETE request this endpoint. This will also delete all external pages that were imported from this source.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.aiContent.deleteContentImportSource({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DeleteContentImportSourceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.aiContent.<a href="/src/api/resources/preview/resources/aiContent/client/Client.ts">listExternalPages</a>() -> Intercom.ExternalPagesList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can retrieve a list of all external pages for a workspace.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.aiContent.listExternalPages();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.aiContent.<a href="/src/api/resources/preview/resources/aiContent/client/Client.ts">createExternalPage</a>({ ...params }) -> Intercom.ExternalPage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new external page by sending a POST request to this endpoint. If an external page already exists with the specified source_id and external_id, it will be updated instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.aiContent.createExternalPage({
    title: "Test",
    html: "<html><body><h1>Test</h1></body></html>",
    url: "https://www.example.com",
    source_id: 44,
    external_id: "abc1234"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.CreateExternalPageRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.aiContent.<a href="/src/api/resources/preview/resources/aiContent/client/Client.ts">getExternalPage</a>({ ...params }) -> Intercom.ExternalPage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can retrieve an external page.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.aiContent.getExternalPage({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.GetExternalPageRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.aiContent.<a href="/src/api/resources/preview/resources/aiContent/client/Client.ts">updateExternalPage</a>({ ...params }) -> Intercom.ExternalPage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update an existing external page (if it was created via the API).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.aiContent.updateExternalPage({
    id: "id",
    title: "Test",
    html: "<html><body><h1>Test</h1></body></html>",
    url: "https://www.example.com",
    source_id: 47,
    external_id: "5678"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.UpdateExternalPageRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.aiContent.<a href="/src/api/resources/preview/resources/aiContent/client/Client.ts">deleteExternalPage</a>({ ...params }) -> Intercom.ExternalPage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sending a DELETE request for an external page will remove it from the content library UI and from being used for AI answers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.aiContent.deleteExternalPage({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DeleteExternalPageRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Articles
<details><summary><code>client.preview.articles.<a href="/src/api/resources/preview/resources/articles/client/Client.ts">listArticles</a>() -> Intercom.ArticleList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all articles by making a GET request to `https://api.intercom.io/articles`.

> 📘 How are the articles sorted and ordered?
>
> Articles will be returned in descending order on the `updated_at` attribute. This means if you need to iterate through results then we'll show the most recently updated articles first.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.articles.listArticles();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.articles.<a href="/src/api/resources/preview/resources/articles/client/Client.ts">createArticle</a>({ ...params }) -> Intercom.Article</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new article by making a POST request to `https://api.intercom.io/articles`.

> 📘 Tags cannot be managed via the Articles API
>
> Article tags are read-only in responses. To create, update, or delete tags, use the Intercom UI or the Tags API endpoints.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.articles.createArticle({
    "key": "value"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `unknown` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.articles.<a href="/src/api/resources/preview/resources/articles/client/Client.ts">retrieveArticle</a>({ ...params }) -> Intercom.Article</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single article by making a GET request to `https://api.intercom.io/articles/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.articles.retrieveArticle({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.RetrieveArticleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.articles.<a href="/src/api/resources/preview/resources/articles/client/Client.ts">deleteArticle</a>({ ...params }) -> Intercom.DeletedArticleObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a single article by making a DELETE request to `https://api.intercom.io/articles/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.articles.deleteArticle({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DeleteArticleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.articles.<a href="/src/api/resources/preview/resources/articles/client/Client.ts">retrieveArticleDraft</a>({ ...params }) -> Intercom.Article</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch the staged draft of a published article by making a GET request to
`https://api.intercom.io/articles/<id>/draft`. The response is the article
rendered with its draft content, leaving the live article untouched.

A draft exists only when a published article has unpublished changes staged
on top of it. Returns `404` when the article has no staged draft.

Requires the `read_articles_scope` OAuth scope. Set `Intercom-Version: Preview`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.articles.retrieveArticleDraft({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.RetrieveArticleDraftRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.articles.<a href="/src/api/resources/preview/resources/articles/client/Client.ts">stageArticleDraft</a>({ ...params }) -> Intercom.Article</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Stage changes to a published article as a draft by making a PUT request to
`https://api.intercom.io/articles/<id>/draft`. The live article remains
unchanged until the draft is published.

The article must already be published; staging a draft on an article that
has never been published returns `422`.

Only versioned text content (such as `title` and `body`) is staged.
Non-versioned fields like AI availability are ignored, leaving the live
values untouched.

Requires the `read_write_articles_scope` OAuth scope. Set `Intercom-Version: Preview`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.articles.stageArticleDraft({
    id: 1,
    body: {
        title: "Christmas is here!",
        body: "<p>New gifts in store for the jolly season</p>"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.StageArticleDraftRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.articles.<a href="/src/api/resources/preview/resources/articles/client/Client.ts">publishArticleDraft</a>({ ...params }) -> Intercom.Article</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Publish a staged draft by making a POST request to
`https://api.intercom.io/articles/<id>/draft/publish`, promoting the draft
content to live.

On a single-language workspace no body is required. On a multilingual
workspace you must list which locales to publish via the `locales` array;
omitting it returns `422`. Returns `422` when there is no staged draft to
publish, or when a requested locale has no pending changes.

Requires the `read_write_articles_scope` OAuth scope. Set `Intercom-Version: Preview`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.articles.publishArticleDraft({
    id: 1,
    body: {
        locales: ["en", "fr"]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.PublishArticleDraftRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.articles.<a href="/src/api/resources/preview/resources/articles/client/Client.ts">listVersions</a>({ ...params }) -> core.Page<Intercom.ArticleVersionSummary, Intercom.ArticleVersionList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch the version history of an article by making a GET request to
`https://api.intercom.io/articles/<article_id>/versions`. Versions are
returned newest-first as a paginated list of metadata. Use
`GET /articles/{article_id}/versions/{id}` to retrieve a single version
with its full content.

Requires the `read_articles_scope` OAuth scope. Set `Intercom-Version: Preview`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.preview.articles.listVersions({
    article_id: 1,
    page: 1,
    per_page: 1,
    locale: "en"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.preview.articles.listVersions({
    article_id: 1,
    page: 1,
    per_page: 1,
    locale: "en"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListArticleVersionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.articles.<a href="/src/api/resources/preview/resources/articles/client/Client.ts">findVersion</a>({ ...params }) -> Intercom.ArticleVersion</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch a single prior version of an article, including its body content,
by making a GET request to
`https://api.intercom.io/articles/<article_id>/versions/<id>`. Returns
the version's full content; the live article remains untouched.

Requires the `read_articles_scope` OAuth scope. Set `Intercom-Version: Preview`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.articles.findVersion({
    article_id: 1,
    id: "301",
    locale: "en"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.FindArticleVersionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.articles.<a href="/src/api/resources/preview/resources/articles/client/Client.ts">attachTagToArticle</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Apply an existing tag to an article. Returns the tag that was applied.

The tag must already exist in the workspace (create tags with the Tags API),
and the authenticating teammate must have the `manage_knowledge_base_content`
permission.

Requires the `read_write_articles_scope` OAuth scope. Set `Intercom-Version: Preview`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.articles.attachTagToArticle({
    article_id: 1,
    id: "7522907"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.AttachTagToArticleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.articles.<a href="/src/api/resources/preview/resources/articles/client/Client.ts">detachTagFromArticle</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Remove a tag from an article. Returns the tag that was removed, with null
`applied_at` and `applied_by`.

The authenticating teammate must have the `manage_knowledge_base_content`
permission.

Requires the `read_write_articles_scope` OAuth scope. Set `Intercom-Version: Preview`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.articles.detachTagFromArticle({
    article_id: 1,
    id: "7522907"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DetachTagFromArticleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.articles.<a href="/src/api/resources/preview/resources/articles/client/Client.ts">searchArticles</a>({ ...params }) -> Intercom.ArticleSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can search for articles by making a GET request to `https://api.intercom.io/articles/search`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.articles.searchArticles({
    phrase: "Getting started",
    state: "published",
    help_center_id: 1,
    highlight: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.SearchArticlesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Away Status Reasons
<details><summary><code>client.preview.awayStatusReasons.<a href="/src/api/resources/preview/resources/awayStatusReasons/client/Client.ts">listAwayStatusReasons</a>() -> Intercom.AwayStatusReasonList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of all away status reasons configured for the workspace, including deleted ones.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.awayStatusReasons.listAwayStatusReasons();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AwayStatusReasonsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Audiences
<details><summary><code>client.preview.audiences.<a href="/src/api/resources/preview/resources/audiences/client/Client.ts">listAudiences</a>({ ...params }) -> Intercom.AudienceList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all audiences for the workspace.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.audiences.listAudiences({
    page: 1,
    per_page: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListAudiencesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AudiencesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.audiences.<a href="/src/api/resources/preview/resources/audiences/client/Client.ts">createAudience</a>({ ...params }) -> Intercom.Audience</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new audience by making a POST request to `https://api.intercom.io/audiences`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.audiences.createAudience({
    name: "VIP Customers",
    predicates: [{
            attribute: "company.name",
            type: "string",
            comparison: "contains",
            value: "Acme"
        }],
    role_predicates: [{
            attribute: "role",
            type: "role",
            comparison: "eq",
            value: "user"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.CreateAudienceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AudiencesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.audiences.<a href="/src/api/resources/preview/resources/audiences/client/Client.ts">retrieveAudience</a>({ ...params }) -> Intercom.Audience</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single audience by making a GET request to `https://api.intercom.io/audiences/{id}`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.audiences.retrieveAudience({
    id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.RetrieveAudienceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AudiencesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.audiences.<a href="/src/api/resources/preview/resources/audiences/client/Client.ts">updateAudience</a>({ ...params }) -> Intercom.Audience</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update the details of a single audience by making a PUT request to `https://api.intercom.io/audiences/{id}`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.audiences.updateAudience({
    id: "123",
    name: "Enterprise Accounts",
    predicates: [{
            attribute: "custom_attributes.plan",
            type: "string",
            comparison: "eq",
            value: "enterprise"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.UpdateAudienceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AudiencesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.audiences.<a href="/src/api/resources/preview/resources/audiences/client/Client.ts">deleteAudience</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a single audience by making a DELETE request to `https://api.intercom.io/audiences/{id}`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.audiences.deleteAudience({
    id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DeleteAudienceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AudiencesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Office Hours
<details><summary><code>client.preview.officeHours.<a href="/src/api/resources/preview/resources/officeHours/client/Client.ts">listOfficeHoursSchedules</a>() -> Intercom.OfficeHoursScheduleList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all office hours schedules for the workspace.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.officeHours.listOfficeHoursSchedules();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `OfficeHoursClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.officeHours.<a href="/src/api/resources/preview/resources/officeHours/client/Client.ts">createOfficeHoursSchedule</a>({ ...params }) -> Intercom.OfficeHoursSchedule</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new office hours schedule for the workspace.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.officeHours.createOfficeHoursSchedule({
    name: "Standard Support Hours",
    time_zone_name: "America/New_York",
    time_intervals: [{
            start_minute: 540,
            end_minute: 1020
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.CreateOfficeHoursScheduleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OfficeHoursClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.officeHours.<a href="/src/api/resources/preview/resources/officeHours/client/Client.ts">getOfficeHoursSchedule</a>({ ...params }) -> Intercom.OfficeHoursSchedule</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single office hours schedule.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.officeHours.getOfficeHoursSchedule({
    id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.GetOfficeHoursScheduleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OfficeHoursClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.officeHours.<a href="/src/api/resources/preview/resources/officeHours/client/Client.ts">updateOfficeHoursSchedule</a>({ ...params }) -> Intercom.OfficeHoursSchedule</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update an existing office hours schedule.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.officeHours.updateOfficeHoursSchedule({
    id: "123",
    name: "Extended Support Hours",
    time_intervals: [{
            start_minute: 480,
            end_minute: 1080
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.UpdateOfficeHoursScheduleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OfficeHoursClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.officeHours.<a href="/src/api/resources/preview/resources/officeHours/client/Client.ts">deleteOfficeHoursSchedule</a>({ ...params }) -> Intercom.DeleteOfficeHoursScheduleResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a single office hours schedule.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.officeHours.deleteOfficeHoursSchedule({
    id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DeleteOfficeHoursScheduleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OfficeHoursClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.officeHours.<a href="/src/api/resources/preview/resources/officeHours/client/Client.ts">listOfficeHoursExceptions</a>({ ...params }) -> Intercom.OfficeHoursExceptionList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all exceptions for an office hours schedule.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.officeHours.listOfficeHoursExceptions({
    office_hours_schedule_id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListOfficeHoursExceptionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OfficeHoursClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.officeHours.<a href="/src/api/resources/preview/resources/officeHours/client/Client.ts">createOfficeHoursException</a>({ ...params }) -> Intercom.OfficeHoursException</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create an exception for an office hours schedule. Use `closed` to mark the day closed (omit `time_intervals`) or `custom_hours` to supply replacement intervals.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.officeHours.createOfficeHoursException({
    office_hours_schedule_id: "123",
    exception_date: "2026-12-25",
    exception_type: "closed",
    name: "Christmas Day",
    recurring_annually: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.CreateOfficeHoursExceptionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OfficeHoursClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.officeHours.<a href="/src/api/resources/preview/resources/officeHours/client/Client.ts">getOfficeHoursException</a>({ ...params }) -> Intercom.OfficeHoursException</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single office hours exception.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.officeHours.getOfficeHoursException({
    office_hours_schedule_id: "123",
    id: "456"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.GetOfficeHoursExceptionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OfficeHoursClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.officeHours.<a href="/src/api/resources/preview/resources/officeHours/client/Client.ts">updateOfficeHoursException</a>({ ...params }) -> Intercom.OfficeHoursException</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update an existing office hours exception.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.officeHours.updateOfficeHoursException({
    office_hours_schedule_id: "123",
    id: "456",
    exception_type: "custom_hours",
    name: "Christmas Day (reduced hours)",
    time_intervals: [{
            start_minute: 540,
            end_minute: 780
        }],
    recurring_annually: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.UpdateOfficeHoursExceptionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OfficeHoursClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.officeHours.<a href="/src/api/resources/preview/resources/officeHours/client/Client.ts">deleteOfficeHoursException</a>({ ...params }) -> Intercom.DeleteOfficeHoursExceptionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a single office hours exception.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.officeHours.deleteOfficeHoursException({
    office_hours_schedule_id: "123",
    id: "456"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DeleteOfficeHoursExceptionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OfficeHoursClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Preview ReportingDataExport
<details><summary><code>client.preview.reportingDataExport.<a href="/src/api/resources/preview/resources/reportingDataExport/client/Client.ts">enqueueANewReportingDataExportJob</a>({ ...params }) -> Intercom.PostExportReportingDataEnqueueResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

For the **conversation** dataset, from the Preview version this export returns all conversations, including those that never received a user reply. Earlier versions return only conversations that received at least one user reply. Other datasets are unaffected.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.reportingDataExport.enqueueANewReportingDataExportJob({
    dataset_id: "conversation",
    attribute_ids: ["conversation_id", "conversation_started_at"],
    start_time: 1717490000,
    end_time: 1717510000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.PostExportReportingDataEnqueueRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ReportingDataExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.reportingDataExport.<a href="/src/api/resources/preview/resources/reportingDataExport/client/Client.ts">listAvailableDatasetsAndAttributes</a>() -> Intercom.GetExportReportingDataGetDatasetsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.reportingDataExport.listAvailableDatasetsAndAttributes();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ReportingDataExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Help Center
<details><summary><code>client.preview.helpCenter.<a href="/src/api/resources/preview/resources/helpCenter/client/Client.ts">listHelpCenterRedirects</a>({ ...params }) -> Intercom.HelpCenterRedirectList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all URL redirects for a help center by making a GET request to `https://api.intercom.io/help_center/help_centers/{help_center_id}/redirects`.

Redirects are returned in descending order on the `updated_at` attribute.

Requires the `read_help_center_redirects_scope` OAuth scope. Set `Intercom-Version: Preview`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.helpCenter.listHelpCenterRedirects({
    help_center_id: "123",
    page: 1,
    per_page: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListHelpCenterRedirectsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `HelpCenterClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.helpCenter.<a href="/src/api/resources/preview/resources/helpCenter/client/Client.ts">createHelpCenterRedirect</a>({ ...params }) -> Intercom.HelpCenterRedirect</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new URL redirect by making a POST request to `https://api.intercom.io/help_center/help_centers/{help_center_id}/redirects`.

Requires the `read_write_help_center_redirects_scope` OAuth scope. Set `Intercom-Version: Preview`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.helpCenter.createHelpCenterRedirect({
    help_center_id: "123",
    from_url: "http://help-center.test/lovelyhelpcenter/old-page",
    locale: "en",
    target_type: "article",
    target_id: "11"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.CreateHelpCenterRedirectRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `HelpCenterClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.helpCenter.<a href="/src/api/resources/preview/resources/helpCenter/client/Client.ts">retrieveHelpCenterRedirect</a>({ ...params }) -> Intercom.HelpCenterRedirect</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single redirect by making a GET request to `https://api.intercom.io/help_center/help_centers/{help_center_id}/redirects/{id}`.

Requires the `read_help_center_redirects_scope` OAuth scope. Set `Intercom-Version: Preview`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.helpCenter.retrieveHelpCenterRedirect({
    help_center_id: "123",
    id: "26"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.RetrieveHelpCenterRedirectRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `HelpCenterClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.helpCenter.<a href="/src/api/resources/preview/resources/helpCenter/client/Client.ts">deleteHelpCenterRedirect</a>({ ...params }) -> Intercom.DeletedHelpCenterRedirectObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a single redirect by making a DELETE request to `https://api.intercom.io/help_center/help_centers/{help_center_id}/redirects/{id}`.

Requires the `read_write_help_center_redirects_scope` OAuth scope. Set `Intercom-Version: Preview`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.helpCenter.deleteHelpCenterRedirect({
    help_center_id: "123",
    id: "26"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DeleteHelpCenterRedirectRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `HelpCenterClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.helpCenter.<a href="/src/api/resources/preview/resources/helpCenter/client/Client.ts">listAllCollections</a>() -> Intercom.CollectionList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all collections by making a GET request to `https://api.intercom.io/help_center/collections`.

Collections will be returned in descending order on the `updated_at` attribute. This means if you need to iterate through results then we'll show the most recently updated collections first.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.helpCenter.listAllCollections();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `HelpCenterClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.helpCenter.<a href="/src/api/resources/preview/resources/helpCenter/client/Client.ts">createCollection</a>({ ...params }) -> Intercom.Collection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new collection by making a POST request to `https://api.intercom.io/help_center/collections.`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.helpCenter.createCollection({
    name: "Thanks for everything"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.CreateCollectionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `HelpCenterClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.helpCenter.<a href="/src/api/resources/preview/resources/helpCenter/client/Client.ts">retrieveCollection</a>({ ...params }) -> Intercom.Collection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single collection by making a GET request to `https://api.intercom.io/help_center/collections/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.helpCenter.retrieveCollection({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.RetrieveCollectionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `HelpCenterClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.helpCenter.<a href="/src/api/resources/preview/resources/helpCenter/client/Client.ts">updateCollection</a>({ ...params }) -> Intercom.Collection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update the details of a single collection by making a PUT request to `https://api.intercom.io/collections/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.helpCenter.updateCollection({
    id: 1,
    name: "Update collection name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.UpdateCollectionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `HelpCenterClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.helpCenter.<a href="/src/api/resources/preview/resources/helpCenter/client/Client.ts">deleteCollection</a>({ ...params }) -> Intercom.DeletedCollectionObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a single collection by making a DELETE request to `https://api.intercom.io/collections/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.helpCenter.deleteCollection({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DeleteCollectionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `HelpCenterClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.helpCenter.<a href="/src/api/resources/preview/resources/helpCenter/client/Client.ts">retrieveHelpCenter</a>({ ...params }) -> Intercom.HelpCenter</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single Help Center by making a GET request to `https://api.intercom.io/help_center/help_center/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.helpCenter.retrieveHelpCenter({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.RetrieveHelpCenterRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `HelpCenterClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.helpCenter.<a href="/src/api/resources/preview/resources/helpCenter/client/Client.ts">listHelpCenters</a>() -> Intercom.HelpCenterList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can list all Help Centers by making a GET request to `https://api.intercom.io/help_center/help_centers`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.helpCenter.listHelpCenters();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `HelpCenterClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Internal Articles
<details><summary><code>client.preview.internalArticles.<a href="/src/api/resources/preview/resources/internalArticles/client/Client.ts">listInternalArticles</a>() -> Intercom.InternalArticleList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all internal articles by making a GET request to `https://api.intercom.io/internal_articles`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.internalArticles.listInternalArticles();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `InternalArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.internalArticles.<a href="/src/api/resources/preview/resources/internalArticles/client/Client.ts">createInternalArticle</a>({ ...params }) -> Intercom.InternalArticle</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new internal article by making a POST request to `https://api.intercom.io/internal_articles`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.internalArticles.createInternalArticle({
    title: "Thanks for everything",
    body: "Body of the Article",
    author_id: 991266252,
    owner_id: 991266252,
    audience_ids: [1, 2]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateInternalArticleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InternalArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.internalArticles.<a href="/src/api/resources/preview/resources/internalArticles/client/Client.ts">retrieveInternalArticle</a>({ ...params }) -> Intercom.InternalArticle</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single internal article by making a GET request to `https://api.intercom.io/internal_articles/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.internalArticles.retrieveInternalArticle({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.RetrieveInternalArticleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InternalArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.internalArticles.<a href="/src/api/resources/preview/resources/internalArticles/client/Client.ts">updateInternalArticle</a>({ ...params }) -> Intercom.InternalArticle</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update the details of a single internal article by making a PUT request to `https://api.intercom.io/internal_articles/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.internalArticles.updateInternalArticle({
    id: 1,
    title: "Christmas is here!",
    body: "<p>New gifts in store for the jolly season</p>",
    audience_ids: [1, 2]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.UpdateInternalArticleRequestBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InternalArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.internalArticles.<a href="/src/api/resources/preview/resources/internalArticles/client/Client.ts">deleteInternalArticle</a>({ ...params }) -> Intercom.DeletedInternalArticleObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a single internal article by making a DELETE request to `https://api.intercom.io/internal_articles/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.internalArticles.deleteInternalArticle({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DeleteInternalArticleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InternalArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.internalArticles.<a href="/src/api/resources/preview/resources/internalArticles/client/Client.ts">attachTagToInternalArticle</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Apply an existing tag to an internal article. Returns the tag that was applied.

The tag must already exist in the workspace (create tags with the Tags API),
and the authenticating teammate must have the `manage_knowledge_base_content`
permission.

Requires the `read_write_articles_scope` OAuth scope. Set `Intercom-Version: Preview`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.internalArticles.attachTagToInternalArticle({
    internal_article_id: 1,
    id: "7522907"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.AttachTagToInternalArticleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InternalArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.internalArticles.<a href="/src/api/resources/preview/resources/internalArticles/client/Client.ts">detachTagFromInternalArticle</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Remove a tag from an internal article. Returns the tag that was removed, with
null `applied_at` and `applied_by`.

The authenticating teammate must have the `manage_knowledge_base_content`
permission.

Requires the `read_write_articles_scope` OAuth scope. Set `Intercom-Version: Preview`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.internalArticles.detachTagFromInternalArticle({
    internal_article_id: 1,
    id: "7522907"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DetachTagFromInternalArticleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InternalArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.internalArticles.<a href="/src/api/resources/preview/resources/internalArticles/client/Client.ts">searchInternalArticles</a>({ ...params }) -> Intercom.InternalArticleSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can search for internal articles by making a GET request to `https://api.intercom.io/internal_articles/search`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.internalArticles.searchInternalArticles({
    folder_id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.SearchInternalArticlesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InternalArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Preview Folders
<details><summary><code>client.preview.folders.<a href="/src/api/resources/preview/resources/folders/client/Client.ts">listFolders</a>({ ...params }) -> Intercom.ListFoldersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all folders for organizing content by making a GET request to `https://api.intercom.io/folders`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.folders.listFolders({
    page: 1,
    per_page: 50,
    parent_folder_id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListFoldersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FoldersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.folders.<a href="/src/api/resources/preview/resources/folders/client/Client.ts">createFolder</a>({ ...params }) -> Intercom.Folder</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new folder for organizing content by making a POST request to `https://api.intercom.io/folders`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.folders.createFolder({
    folder: {
        name: "Product Documentation",
        description: "Internal product docs",
        emoji: "\uD83D\uDCDA"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.CreateFolderRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FoldersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.folders.<a href="/src/api/resources/preview/resources/folders/client/Client.ts">retrieveFolder</a>({ ...params }) -> Intercom.Folder</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single folder by making a GET request to `https://api.intercom.io/folders/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.folders.retrieveFolder({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.RetrieveFolderRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FoldersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.folders.<a href="/src/api/resources/preview/resources/folders/client/Client.ts">updateFolder</a>({ ...params }) -> Intercom.Folder</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update a folder by making a PUT request to `https://api.intercom.io/folders/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.folders.updateFolder({
    id: 1,
    folder: {
        name: "Updated Product Documentation",
        emoji: "\uD83D\uDCD6"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.UpdateFolderRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FoldersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.folders.<a href="/src/api/resources/preview/resources/folders/client/Client.ts">deleteFolder</a>({ ...params }) -> Intercom.DeletedFolderObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a folder (if it contains no content) by making a DELETE request to `https://api.intercom.io/folders/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.folders.deleteFolder({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DeleteFolderRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FoldersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Companies
<details><summary><code>client.preview.companies.<a href="/src/api/resources/preview/resources/companies/client/Client.ts">retrieveCompany</a>({ ...params }) -> Intercom.CompanyList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a single company by passing in `company_id` or `name`.

  `https://api.intercom.io/companies?name={name}`

  `https://api.intercom.io/companies?company_id={company_id}`

You can fetch all companies and filter by `segment_id` or `tag_id` as a query parameter.

  `https://api.intercom.io/companies?tag_id={tag_id}`

  `https://api.intercom.io/companies?segment_id={segment_id}`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.companies.retrieveCompany({
    name: "my company",
    company_id: "12345",
    tag_id: "678910",
    segment_id: "98765",
    page: 1,
    per_page: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.RetrieveCompanyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.companies.<a href="/src/api/resources/preview/resources/companies/client/Client.ts">createOrUpdateCompany</a>({ ...params }) -> Intercom.Company</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create or update a company.

Companies will be only visible in Intercom when there is at least one associated user.

Companies are looked up via `company_id` in a `POST` request, if not found via `company_id`, the new company will be created, if found, that company will be updated.

{% admonition type="warning" name="Using `company_id`" %}
  You can set a unique `company_id` value when creating a company. However, it is not possible to update `company_id`. Be sure to set a unique value once upon creation of the company.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.companies.createOrUpdateCompany({
    "key": "value"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `unknown` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.companies.<a href="/src/api/resources/preview/resources/companies/client/Client.ts">retrieveACompanyById</a>({ ...params }) -> Intercom.Company</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a single company.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.companies.retrieveACompanyById({
    id: "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.RetrieveACompanyByIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.companies.<a href="/src/api/resources/preview/resources/companies/client/Client.ts">updateCompany</a>({ ...params }) -> Intercom.Company</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update a single company using the Intercom provisioned `id`.

{% admonition type="warning" name="Using `company_id`" %}
  When updating a company it is not possible to update `company_id`. This can only be set once upon creation of the company.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.companies.updateCompany({
    id: "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.UpdateCompanyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.companies.<a href="/src/api/resources/preview/resources/companies/client/Client.ts">deleteCompany</a>({ ...params }) -> Intercom.DeletedCompanyObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a single company.

This endpoint does not permanently remove the company. It archives the company record and detaches any contacts attached to it; the contacts themselves are not deleted. A `company.deleted` webhook is sent once archival completes.

The endpoint returns `200` with `"deleted": true` as soon as the request is accepted — archival is processed asynchronously.

{% admonition type="warning" %}
Third-party integrations that sync companies into Intercom (for example, Salesforce or Chargebee) will recreate any company deleted through this endpoint on their next sync. To prevent recreation, remove or filter the company at the source integration before deleting it via the API.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.companies.deleteCompany({
    id: "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DeleteCompanyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.companies.<a href="/src/api/resources/preview/resources/companies/client/Client.ts">listAttachedContacts</a>({ ...params }) -> Intercom.CompanyAttachedContacts</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all contacts that belong to a company.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.companies.listAttachedContacts({
    id: "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListAttachedContactsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.companies.<a href="/src/api/resources/preview/resources/companies/client/Client.ts">listAttachedSegmentsForCompanies</a>({ ...params }) -> Intercom.CompanyAttachedSegments</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all segments that belong to a company.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.companies.listAttachedSegmentsForCompanies({
    id: "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListAttachedSegmentsForCompaniesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.companies.<a href="/src/api/resources/preview/resources/companies/client/Client.ts">searchCompanies</a>({ ...params }) -> Intercom.CompanyList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can search for companies by the value of their attributes in order to fetch exactly the companies you want.

To search for companies, send a `POST` request to `https://api.intercom.io/companies/search`, with a query object in the body defining your filters.

Note that the API does not include companies who have no associated users in search results.

{% admonition type="warning" name="Optimizing search queries" %}
  Search queries can be complex, so optimizing them can help the performance of your search.
  Use the `AND` and `OR` operators to combine multiple filters to get the exact results you need and utilize
  pagination to limit the number of results returned. The default is `15` results per page.
  See the [pagination section](https://developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/pagination/#example-search-conversations-request) for more details on how to use the `starting_after` param.
{% /admonition %}

### Nesting & Limitations

You can nest these filters in order to get even more granular insights that pinpoint exactly what you need. Example: (1 OR 2) AND (3 OR 4).
There are some limitations to the amount of multiple's there can be:
* There's a limit of max 2 nested filters
* There's a limit of max 15 filters for each AND or OR group

### Accepted Fields

Most keys listed as part of the Companies Model are searchable. The value you search for has to match the accepted type, otherwise the query will fail (ie. as `created_at` accepts a date, the `value` cannot be a string such as `"foobar"`).

| Field                              | Type                           |
| ---------------------------------- | ------------------------------ |
| company_id                         | String                         |
| name                               | String                         |
| created_at                         | Date (UNIX Timestamp)          |
| updated_at                         | Date (UNIX Timestamp)          |
| remote_created_at                  | Date (UNIX Timestamp)          |
| last_request_at                    | Date (UNIX Timestamp)          |
| monthly_spend                      | Integer                        |
| session_count                      | Integer                        |
| user_count                         | Integer                        |
| tag_id                             | String                         |
| custom_attributes.{attribute_name} | String                         |

The `plan.id` and `plan.name` fields are not searchable and return a `400` error with code `invalid_field`.

### Accepted Operators

The table below shows the operators you can use to define how you want to search for the value. The operator should be put in as a string (`"="`). The operator has to be compatible with the field's type (eg. you cannot search with `>` for a given string value as it's only compatible for integer's and dates). Searching by `tag_id` supports only the `=` and `!=` operators. The `IN` and `NIN` operators are not supported for Date fields.

| Operator | Valid Types                      | Description                                                      |
| :------- | :------------------------------- | :--------------------------------------------------------------- |
| =        | All                              | Equals                                                           |
| !=       | All                              | Doesn't Equal                                                    |
| IN       | All except Date and tag_id       | In<br>Shortcut for `OR` queries<br>Values must be in Array       |
| NIN      | All except Date and tag_id       | Not In<br>Shortcut for `OR !` queries<br>Values must be in Array |
| >        | Integer<br>Date (UNIX Timestamp) | Greater than                                                     |
| <       | Integer<br>Date (UNIX Timestamp) | Lower than                                                       |
| ~        | String                           | Contains                                                         |
| !~       | String                           | Doesn't Contain                                                  |
| ^        | String                           | Starts With                                                      |
| $        | String                           | Ends With                                                        |

### Sorting

Pass an optional `sort` object with a `field` and an `order` (`ascending` or `descending`; defaults to `descending`) to order the results. An invalid `order` returns a `400` error with code `invalid_sort_order`. `tag_id` can be used as a filter but not as a sort field.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.companies.searchCompanies({
    query: {
        operator: "AND",
        value: [{
                field: "name",
                operator: "=",
                value: "my-company"
            }]
    },
    pagination: {
        per_page: 5
    },
    sort: {
        field: "name",
        order: "ascending"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.CompanySearchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.companies.<a href="/src/api/resources/preview/resources/companies/client/Client.ts">listAllCompanies</a>({ ...params }) -> Intercom.CompanyList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can list companies. The company list is sorted by the `last_request_at` field and by default is ordered descending, most recently requested first.

Note that the API does not include companies who have no associated users in list responses.

When using the Companies endpoint and the pages object to iterate through the returned companies, there is a limit of 10,000 Companies that can be returned. If you need to list or iterate on more than 10,000 Companies, please use the [Scroll API](https://developers.intercom.com/reference#iterating-over-all-companies).
{% admonition type="warning" name="Pagination" %}
  You can use pagination to limit the number of results returned. The default is `20` results per page.
  See the [pagination section](https://developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/pagination/#pagination-for-list-apis) for more details on how to use the `starting_after` param.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.companies.listAllCompanies({
    page: 1,
    per_page: 1,
    order: "desc"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListAllCompaniesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.companies.<a href="/src/api/resources/preview/resources/companies/client/Client.ts">scrollOverAllCompanies</a>({ ...params }) -> Intercom.CompanyScroll | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

      The `list all companies` functionality does not work well for huge datasets, and can result in errors and performance problems when paging deeply. The Scroll API provides an efficient mechanism for iterating over all companies in a dataset.

- Each app can only have 1 scroll open at a time. You'll get an error message if you try to have more than one open per app.
- If the scroll isn't used for 1 minute, it expires and calls with that scroll param will fail
- If the end of the scroll is reached, "companies" will be empty and the scroll parameter will expire

{% admonition type="info" name="Scroll Parameter" %}
  You can get the first page of companies by simply sending a GET request to the scroll endpoint.
  For subsequent requests you will need to use the scroll parameter from the response.
{% /admonition %}
{% admonition type="danger" name="Scroll network timeouts" %}
  Since scroll is often used on large datasets network errors such as timeouts can be encountered. When this occurs you will see a HTTP 500 error with the following message:
  "Request failed due to an internal network error. Please restart the scroll operation."
  If this happens, you will need to restart your scroll query: It is not possible to continue from a specific point when using scroll.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.companies.scrollOverAllCompanies({
    scroll_param: "scroll_param"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ScrollOverAllCompaniesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.companies.<a href="/src/api/resources/preview/resources/companies/client/Client.ts">attachContactToACompany</a>({ ...params }) -> Intercom.Company</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can attach a company to a single contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.companies.attachContactToACompany({
    id: "id",
    company_id: "6762f09a1bb69f9f2193bb34"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.AttachContactToACompanyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.companies.<a href="/src/api/resources/preview/resources/companies/client/Client.ts">detachContactFromACompany</a>({ ...params }) -> Intercom.Company</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can detach a company from a single contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.companies.detachContactFromACompany({
    contact_id: "58a430d35458202d41b1e65b",
    id: "58a430d35458202d41b1e65b"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DetachContactFromACompanyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.companies.<a href="/src/api/resources/preview/resources/companies/client/Client.ts">bulkCreateCompanies</a>({ ...params }) -> Intercom.CompaniesBulkJob</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can bulk create or update companies by submitting an array of company objects. Each company is matched on the `company_id` you have defined for it: a new company is created if none exists with that `company_id`, otherwise the matching company is updated. This mirrors the single [Create or update a company](/docs/references/preview/rest-api/api.intercom.io/companies/createorupdatecompany) endpoint.

The endpoint creates an async job that processes the items in the background. Use the returned job ID with `GET /companies/bulk/{id}` to check the job status.

{% admonition type="info" name="Handling failures" %}
  If an item fails validation, that item is rejected and the job's `state` ends as `completed_with_errors`. The other companies in the same request are still processed. The job `state` from `GET /companies/bulk/{id}` is the signal that one or more items were rejected.
{% /admonition %}

{% admonition type="info" name="Limits" %}
  - Maximum of 100 companies per request.
  - You can append tasks to an existing job by including `job.id` in the request body.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.companies.bulkCreateCompanies({
    companies: [{
            company_id: "abc123",
            name: "Acme Corp",
            plan: "Enterprise",
            size: 100,
            website: "https://www.example.com",
            industry: "Manufacturing",
            custom_attributes: {
                "paid_subscriber": true,
                "team_mates": 9
            },
            remote_created_at: 1394531169,
            monthly_spend: 1000,
            update_last_request_at: true
        }, {
            company_id: "def456",
            name: "Example Inc",
            industry: "Manufacturing"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.BulkCreateCompaniesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.companies.<a href="/src/api/resources/preview/resources/companies/client/Client.ts">bulkUpdateCompanies</a>({ ...params }) -> Intercom.CompaniesBulkJob</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can bulk update companies by submitting an array of company objects with the fields to update. Each company must include an `id` field identifying the company to update by its Intercom company `id`. An unknown `id` fails that item and never creates a company.

Only the fields listed in the request schema below can be set. Any other fields in a company object are ignored.

The endpoint creates an async job that processes the updates in the background. Use the returned job ID with `GET /companies/bulk/{id}` to check the job status.

{% admonition type="info" name="Limits" %}
  - Maximum of 100 companies per request.
  - You can append tasks to an existing job by including `job.id` in the request body.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.companies.bulkUpdateCompanies({
    companies: [{
            id: "531ee472cce572a6ec000006",
            name: "Acme Corp",
            plan: "Enterprise",
            size: 100,
            website: "https://www.example.com",
            industry: "Manufacturing",
            custom_attributes: {
                "paid_subscriber": true,
                "team_mates": 9
            },
            remote_created_at: 1394531169,
            monthly_spend: 1000,
            update_last_request_at: true
        }, {
            id: "531ee472cce572a6ec000007",
            name: "Example Inc"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.BulkUpdateCompaniesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.companies.<a href="/src/api/resources/preview/resources/companies/client/Client.ts">bulkDeleteCompanies</a>({ ...params }) -> Intercom.CompaniesBulkJob</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can bulk delete companies by submitting an array of companies, each identified by its Intercom company `id`. Deleting a company detaches all of its associated contacts but keeps the company record itself — the same archival behaviour as the single [Delete a company](/docs/references/preview/rest-api/api.intercom.io/companies/deletecompany) endpoint.

The endpoint creates an async job that processes the deletes in the background. Use the returned job ID with `GET /companies/bulk/{id}` to check the job status.

{% admonition type="info" name="Limits" %}
  - Maximum of 100 companies per request.
  - You can append tasks to an existing job by including `job.id` in the request body.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.companies.bulkDeleteCompanies({
    companies: [{
            id: "531ee472cce572a6ec000006"
        }, {
            id: "531ee472cce572a6ec000007"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.BulkDeleteCompaniesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.companies.<a href="/src/api/resources/preview/resources/companies/client/Client.ts">showBulkCompaniesJob</a>({ ...params }) -> Intercom.CompaniesBulkJob</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can check the status of a bulk companies job. The `state` field indicates the overall job progress: `pending`, `running`, `completed`, or `completed_with_errors`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.companies.showBulkCompaniesJob({
    id: "job_v2_1"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ShowBulkCompaniesJobRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Notes
<details><summary><code>client.preview.notes.<a href="/src/api/resources/preview/resources/notes/client/Client.ts">listCompanyNotes</a>({ ...params }) -> Intercom.NoteList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of notes that are associated to a company.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.notes.listCompanyNotes({
    company_id: "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListCompanyNotesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.notes.<a href="/src/api/resources/preview/resources/notes/client/Client.ts">createCompanyNote</a>({ ...params }) -> Intercom.Note</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can add a note to a single company.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.notes.createCompanyNote({
    company_id: "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632",
    body: "Hello",
    admin_id: "991267583"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.CreateCompanyNoteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.notes.<a href="/src/api/resources/preview/resources/notes/client/Client.ts">listNotes</a>({ ...params }) -> Intercom.NoteList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of notes that are associated to a contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.notes.listNotes({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListNotesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.notes.<a href="/src/api/resources/preview/resources/notes/client/Client.ts">createNote</a>({ ...params }) -> Intercom.Note</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can add a note to a single contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.notes.createNote({
    id: 1,
    body: "Hello",
    contact_id: "6762f0ad1bb69f9f2193bb62",
    admin_id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.CreateNoteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.notes.<a href="/src/api/resources/preview/resources/notes/client/Client.ts">retrieveNote</a>({ ...params }) -> Intercom.Note</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single note.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.notes.retrieveNote({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.RetrieveNoteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.notes.<a href="/src/api/resources/preview/resources/notes/client/Client.ts">deleteNote</a>({ ...params }) -> Intercom.DeletedNoteObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a single contact or company note. Notes of other kinds cannot be deleted through the API.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.notes.deleteNote({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DeleteNoteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Contacts
<details><summary><code>client.preview.contacts.<a href="/src/api/resources/preview/resources/contacts/client/Client.ts">listCompaniesForAContact</a>({ ...params }) -> Intercom.ContactAttachedCompanies</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of companies that are associated to a contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.contacts.listCompaniesForAContact({
    id: "63a07ddf05a32042dffac965"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListCompaniesForAContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.contacts.<a href="/src/api/resources/preview/resources/contacts/client/Client.ts">listGrantedCompaniesForAContact</a>({ ...params }) -> Intercom.GrantedCompanyList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List the companies a contact has been granted access to.

A granted company lets the contact read that company's tickets in the customer portal. It is separate from company membership — granting a company does not attach the contact to it, and [`GET /contacts/{id}/companies`](/docs/references/preview/rest-api/api.intercom.io/contacts/listcompaniesforacontact) does not include grants.

`company_ids` holds the `company_id` values you set on your companies, so the list round-trips with the `company_ids` you send to `PUT /contacts/{contact_id}/granted_companies`. The list is sorted by company id and paginated.

Returns an empty list when granted companies are not enabled for the workspace.

Requires the `read_users_companies` OAuth scope. Set `Intercom-Version: Preview`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.contacts.listGrantedCompaniesForAContact({
    contact_id: "63a07ddf05a32042dffac965",
    page: 1,
    per_page: 1,
    order: "asc"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListGrantedCompaniesForAContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.contacts.<a href="/src/api/resources/preview/resources/contacts/client/Client.ts">replaceGrantedCompaniesForAContact</a>({ ...params }) -> Intercom.GrantedCompanyList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Replace the full set of companies a contact has been granted access to.

This is a replacement, not an append. The `company_ids` you send become the contact's entire granted set — any company id you leave out is dropped. To add a company, send the existing ids plus the new one; to remove one, send the existing ids minus that one; to drop every grant, send an empty array.

Identify companies by the `company_id` you set on them, the same values [`GET /contacts/{contact_id}/granted_companies`](/docs/references/preview/rest-api/api.intercom.io/contacts/listgrantedcompaniesforacontact) returns. Duplicates in the request are collapsed. A contact can be granted at most 100 companies.

The response echoes the stored set, so a `200` is confirmation of exactly what the contact can now read.

{% admonition type="info" name="Requires granted companies to be enabled" %}
  This endpoint returns `404` with the code `granted_companies_not_enabled` unless granted companies are enabled for the workspace. Contact Intercom Support to enable it.
{% /admonition %}

Requires the `write_users_companies` OAuth scope. Set `Intercom-Version: Preview`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.contacts.replaceGrantedCompaniesForAContact({
    contact_id: "63a07ddf05a32042dffac965",
    company_ids: ["acme-corp", "1234", "globex"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ReplaceGrantedCompaniesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.contacts.<a href="/src/api/resources/preview/resources/contacts/client/Client.ts">removeGrantedCompanyFromAContact</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Remove a single company from a contact's granted set, leaving the contact's other grants in place.

Identify the company by the `company_id` you set on it, the same value [`GET /contacts/{contact_id}/granted_companies`](/docs/references/preview/rest-api/api.intercom.io/contacts/listgrantedcompaniesforacontact) returns. A `company_id` containing a dot or a slash is supported — URL-encode a slash as `%2F`.

This endpoint is not idempotent. Removing a company the contact is not currently granted returns `404` with the code `company_not_found`, so repeating a successful call returns `404` rather than `204`. Treat the first `204` as the confirmation.

{% admonition type="info" name="Requires granted companies to be enabled" %}
  This endpoint returns `404` with the code `granted_companies_not_enabled` unless granted companies are enabled for the workspace. Contact Intercom Support to enable it.
{% /admonition %}

Requires the `write_users_companies` OAuth scope. Set `Intercom-Version: Preview`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.contacts.removeGrantedCompanyFromAContact({
    contact_id: "63a07ddf05a32042dffac965",
    company_id: "acme-corp"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.RemoveGrantedCompanyFromAContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.contacts.<a href="/src/api/resources/preview/resources/contacts/client/Client.ts">listSegmentsForAContact</a>({ ...params }) -> Intercom.ContactSegments</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of segments that are associated to a contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.contacts.listSegmentsForAContact({
    contact_id: "63a07ddf05a32042dffac965"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListSegmentsForAContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.contacts.<a href="/src/api/resources/preview/resources/contacts/client/Client.ts">listSubscriptionsForAContact</a>({ ...params }) -> Intercom.SubscriptionTypeList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of subscription types that are attached to a contact. These can be subscriptions that a user has 'opted-in' to or has 'opted-out' from, depending on the subscription type.
This will return a list of Subscription Type objects that the contact is associated with.

The data property will show a combined list of:

  1.Opt-out subscription types that the user has opted-out from.
  2.Opt-in subscription types that the user has opted-in to receiving.

**Note:** This endpoint only returns subscriptions where the contact has explicitly configured their preference. Subscriptions that are in the default state — where the contact has not made an explicit opt-in or opt-out choice — are not included in the response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.contacts.listSubscriptionsForAContact({
    contact_id: "63a07ddf05a32042dffac965"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListSubscriptionsForAContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.contacts.<a href="/src/api/resources/preview/resources/contacts/client/Client.ts">listTagsForAContact</a>({ ...params }) -> Intercom.TagList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all tags that are attached to a specific contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.contacts.listTagsForAContact({
    contact_id: "63a07ddf05a32042dffac965"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListTagsForAContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.contacts.<a href="/src/api/resources/preview/resources/contacts/client/Client.ts">listDeletedContacts</a>({ ...params }) -> Intercom.DeletedContactList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch a paginated list of the contacts in your workspace that are no longer active,
so you can recover ones whose `id`, `email`, or `external_id` you no longer have and
then permanently delete them. Each entry carries a `status` describing why the contact
is inactive: `archived`, `blocked`, `merged`, `pending_deletion`, or `permanently_deleted`.
`merged_into_id` is present only when `status` is `merged`, and `external_id` and `email`
are `null` for `permanently_deleted` contacts.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.contacts.listDeletedContacts({
    per_page: 1,
    page: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListDeletedContactsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.contacts.<a href="/src/api/resources/preview/resources/contacts/client/Client.ts">showContact</a>({ ...params }) -> Intercom.ShowContactResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single contact.

{% admonition type="info" name="Merged contacts return 410 Gone" %}
  If a contact has been merged into another contact via the Merge endpoint (`POST /contacts/merge`), requesting it by its original ID will return **HTTP 410 Gone** with a `Link` header pointing to the canonical (merged-into) contact.

  **Response headers:**
  ```
  Link: </contacts/{canonical_id}>; rel="canonical"
  ```

  **Response body:**
  ```json
  {
    "type": "error.list",
    "errors": [{ "code": "contact_merged", "message": "This contact has been merged. See the 'Link' header for the canonical contact." }]
  }
  ```

  The `Link` header contains the path to the final merge target, resolving multi-hop merge chains (up to 3 hops).
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.contacts.showContact({
    id: "63a07ddf05a32042dffac965",
    include_merge_history: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ShowContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.contacts.<a href="/src/api/resources/preview/resources/contacts/client/Client.ts">updateContact</a>({ ...params }) -> Intercom.UpdateContactResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update an existing contact (ie. user or lead).

{% admonition type="info" %}
  This endpoint handles both **contact updates** and **custom object associations**.

  See _`update a contact with an association to a custom object instance`_ in the request/response examples to see the custom object association format.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.contacts.updateContact({
    id: "63a07ddf05a32042dffac965",
    include_merge_history: true,
    email: "joebloggs@intercom.io",
    name: "joe bloggs"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.UpdateContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.contacts.<a href="/src/api/resources/preview/resources/contacts/client/Client.ts">deleteContact</a>({ ...params }) -> Intercom.ContactDeleted</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a single contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.contacts.deleteContact({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DeleteContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.contacts.<a href="/src/api/resources/preview/resources/contacts/client/Client.ts">mergeContact</a>({ ...params }) -> Intercom.MergeContactResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can merge one contact into another. Both lead-into-user and user-into-user merges are supported: the source contact (`from`) may have a `role` of `lead` or `user`, and the destination contact (`into`) must have a `role` of `user`.

{% admonition type="warning" name="User-to-user merges" %}
  When you merge a user into another user, the source user's attribute values (standard and custom) are discarded and are not moved onto the target user. The target user keeps its own attribute values. Records associated with the source, such as conversations, notes, and tags, are still reassigned to the target.

  Merging a user into another user requires the `merge_users` OAuth scope on your access token, in addition to the scope required for lead-into-user merges. Tokens without this scope receive a `401 Unauthorized` when the source contact is a user.
{% /admonition %}

{% admonition type="warning" name="Merged contacts are not retrievable via the API" %}
  Once a merge is completed, the source contact (`from`) is permanently removed from the active contact list. This means:
  - **GET /contacts/{id}** — Requesting the source contact by its original ID will return `410 Gone` with a `Link` header pointing to the canonical (merged-into) contact.
  - **POST /contacts/search** — The source contact will not appear in search results, including queries filtered by `updated_at`.
  - **GET /contacts** — The source contact will not appear in list results.

  Only the target contact (`into`) remains accessible. If your application stores contact IDs, update them to use the target contact's ID after a merge.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.contacts.mergeContact({
    include_merge_history: true,
    from: "6762f0d51bb69f9f2193bb7f",
    into: "6762f0d51bb69f9f2193bb80"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.MergeContactsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.contacts.<a href="/src/api/resources/preview/resources/contacts/client/Client.ts">previewMergeContact</a>({ ...params }) -> Intercom.MergePreviewResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Preview the result of merging one contact into another without applying the merge. This is a read-only dry run: it reports whether the merge is allowed and, if so, exactly what would change, **without modifying any data**.

Send the same `from` and `into` contact IDs you would pass to [Merge two contacts](/docs/references/preview/rest-api/api.intercom.io/contacts/mergecontact). As with the merge endpoint, `from` may have a `role` of `lead` or `user`, and `into` must have a `role` of `user`. You can optionally pass `custom_attribute_names` to include specific custom attributes in the previewed attribute changes.

- When `allowed` is `true`, the response contains a `summary`: every attribute change (with the resulting value on the surviving contact) and, for each object type, two counts — `from`, how many are on the source contact and would move to the destination, and `into`, how many the destination already has. Counts are reported for conversations, tickets, phone calls, notes, and tags. `conversations` counts non-ticket conversations only; tickets are reported separately under `tickets`, and `phone_calls` is present only for phone-channel merges.
- When `allowed` is `false`, the response contains `reasons`. Each reason has a stable `code` you can branch on and a human-readable `message` you can display.

{% admonition type="warning" name="Previewing non-duplicate contacts" %}
By default a merge requires the two contacts to share an identifier (email or phone). Set `skip_duplicate_validation` to `true` to preview a merge of contacts that don't, the same rule the merge endpoint enforces.
{% /admonition %}

When `allowed` is `false`, `reasons[].code` is one of:

| code | meaning |
| --- | --- |
| `source_same_as_target` | The source contact (`from`) and the destination contact (`into`) are the same contact. A contact can't be merged into itself. |
| `invalid_merge_role_pair` | The `from`/`into` roles aren't mergeable. `into` must be a user. |
| `no_shared_identifier` | The contacts share no email or phone. Set `skip_duplicate_validation` to preview anyway. |
| `facebook_user` | Facebook contacts can't be merged. |
| `external_lead_channel_not_allowed` | The source is an external-channel lead that isn't eligible for merging. |
| `mailing_list` | Contacts created from a mailing list can't be merged. |
| `user_to_lead` | `into` is a lead or visitor. A user can only be merged into another user. |
| `whatsapp_data_cannot_be_merged` | The WhatsApp number on the source contact can't be reassigned to the destination. |
| `telegram_data_cannot_be_merged` | The Telegram sender on the source contact can't be reassigned to the destination. |
| `source_has_telegram_data` | The source contact has Telegram data, which user-into-user merges don't yet support moving. |
| `phone_data_cannot_be_merged` | The phone data on the source contact can't be reassigned to the destination. |
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.contacts.previewMergeContact({
    from: "6762f0d51bb69f9f2193bb7f",
    into: "6762f0d51bb69f9f2193bb80"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.MergePreviewRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.contacts.<a href="/src/api/resources/preview/resources/contacts/client/Client.ts">searchContacts</a>({ ...params }) -> Intercom.ContactList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can search for multiple contacts by the value of their attributes in order to fetch exactly who you want.

To search for contacts, you need to send a `POST` request to `https://api.intercom.io/contacts/search`.

This will accept a query object in the body which will define your filters in order to search for contacts.

{% admonition type="warning" name="Optimizing search queries" %}
  Search queries can be complex, so optimizing them can help the performance of your search.
  Use the `AND` and `OR` operators to combine multiple filters to get the exact results you need and utilize
  pagination to limit the number of results returned. The default is `50` results per page.
  See the [pagination section](https://developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/pagination/#example-search-conversations-request) for more details on how to use the `starting_after` param.
{% /admonition %}
### Merged Contacts

Contacts that have been merged (via POST /contacts/merge) are excluded from search results. If a contact was recently merged into another, it will no longer appear in queries filtered by `updated_at` or any other field. Only the target contact from the merge remains searchable.

### Contact Creation Delay

If a contact has recently been created, there is a possibility that it will not yet be available when searching. This means that it may not appear in the response. This delay can take a few minutes. If you need to be instantly notified it is recommended to use webhooks and iterate to see if they match your search filters.

### Nesting & Limitations

You can nest these filters in order to get even more granular insights that pinpoint exactly what you need. Example: (1 OR 2) AND (3 OR 4).
There are some limitations to the amount of multiple's there can be:
* There's a limit of max 2 nested filters
* There's a limit of max 15 filters for each AND or OR group

### Searching for Timestamp Fields

Standard timestamp fields and Date custom attributes behave differently.

**Standard timestamp fields** (`created_at`, `updated_at`, `last_seen_at` etc.) are filtered on the exact second, in UTC. `=` matches only Contacts whose value is that exact second, and `>`, `<`, `>=` and `<=` compare against the exact instant you pass - the value is not rounded or truncated. These fields report a type of `datetime` on the Data Attributes endpoint. Note that `!=` also matches Contacts with no value set for the field.

**Date custom attributes** are matched by calendar day, and the day boundary is always UTC regardless of your workspace's timezone. `=` matches the whole UTC day, `>` matches from the start of the *next* UTC day, and `<` matches everything before the start of that day. The `!=`, `>=`, `<=`, `IN` and `NIN` operators are not supported on these fields and return an error.

**Example.** Searching for `created_at` greater than `1577869200` (January 1st, 2020 9:00 AM UTC) returns Contacts created after that exact instant. Passing the same value for a Date custom attribute truncates it to `1577836800` (January 1st, 2020 12:00 AM UTC), so those results begin from January 2nd, 2020 12:00 AM UTC.

Only search queries behave this way. Responses always carry the full UNIX timestamp, and sorting uses the full value.

### Accepted Fields

Most key listed as part of the Contacts Model are searchable, whether writeable or not. The value you search for has to match the accepted type, otherwise the query will fail (ie. as `created_at` accepts a date, the `value` cannot be a string such as `"foorbar"`).

| Field                              | Type                           |
| ---------------------------------- | ------------------------------ |
| id                                 | String                         |
| role                               | String<br>Accepts user or lead |
| name                               | String                         |
| avatar                             | String                         |
| owner_id                           | Integer                        |
| email                              | String                         |
| email_domain                       | String                         |
| phone                              | String                         |
| formatted_phone                    | String                         |
| external_id                        | String                         |
| created_at                         | Datetime (Unix timestamp in seconds) |
| signed_up_at                       | Datetime (Unix timestamp in seconds) |
| updated_at                         | Datetime (Unix timestamp in seconds) |
| last_seen_at                       | Datetime (Unix timestamp in seconds) |
| last_contacted_at                  | Datetime (Unix timestamp in seconds) |
| last_replied_at                    | Datetime (Unix timestamp in seconds) |
| last_email_opened_at               | Datetime (Unix timestamp in seconds) |
| last_email_clicked_at              | Datetime (Unix timestamp in seconds) |
| language_override                  | String                         |
| browser                            | String                         |
| browser_language                   | String                         |
| os                                 | String                         |
| location.country                   | String                         |
| location.region                    | String                         |
| location.city                      | String                         |
| unsubscribed_from_emails           | Boolean                        |
| marked_email_as_spam               | Boolean                        |
| has_hard_bounced                   | Boolean                        |
| ios_last_seen_at                   | Datetime (Unix timestamp in seconds) |
| ios_app_version                    | String                         |
| ios_device                         | String                         |
| ios_app_device                     | String                         |
| ios_os_version                     | String                         |
| ios_app_name                       | String                         |
| ios_sdk_version                    | String                         |
| android_last_seen_at               | Datetime (Unix timestamp in seconds) |
| android_app_version                | String                         |
| android_device                     | String                         |
| android_app_name                   | String                         |
| andoid_sdk_version                 | String                         |
| segment_id                         | String                         |
| tag_id                             | String                         |
| custom_attributes.{attribute_name} | Matches the attribute's own type<br>(String, Integer, Float, Boolean or Date) |

### Accepted Operators

{% admonition type="warning" name="Operators not supported on Date custom attributes" %}
  Date custom attributes do not support the `!=`, `>=`, or `<=` operators. Using them returns an error. Standard timestamp fields (`created_at`, `updated_at` etc.) do support these operators, and are filtered on the exact second.
{% /admonition %}

The table below shows the operators you can use to define how you want to search for the value. The operator should be put in as a string (`"="`). Which operators are valid depends on the field's type - see the "Valid Types" column below. Searching by `tag_id` supports only the `=` and `!=` operators.

| Operator | Valid Types                        | Description                                                            |
| :------- | :---------------------------------- | :----------------------------------------------------------------------|
| =        | All                                  | Equals                                                                  |
| !=       | All except Date                      | Doesn't Equal<br>Also matches Contacts with no value set                |
| IN       | All except Date, Datetime and tag_id | In<br>Shortcut for `OR` queries<br>Values must be in Array              |
| NIN      | All except Date, Datetime and tag_id | Not In<br>Shortcut for `OR !` queries<br>Values must be in Array        |
| >        | Integer<br>Datetime<br>Date | Greater than<br>On Date custom attributes, matches from the start of the next day |
| <        | Integer<br>Datetime<br>Date | Lower than<br>On Date custom attributes, matches before the start of the day |
| >=       | Integer<br>Datetime         | Greater than or equal to<br>Not supported on Date custom attributes    |
| <=       | Integer<br>Datetime         | Lower than or equal to<br>Not supported on Date custom attributes      |
| ~        | String                               | Contains                                                                |
| !~       | String                               | Doesn't Contain                                                         |
| ^        | String                               | Starts With                                                             |
| $        | String                               | Ends With                                                               |
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.contacts.searchContacts({
    include_merge_history: true,
    query: {
        operator: "AND",
        value: [{
                field: "created_at",
                operator: ">",
                value: "1306054154"
            }]
    },
    pagination: {
        per_page: 5
    },
    sort: {
        field: "created_at",
        order: "ascending"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ContactSearchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.contacts.<a href="/src/api/resources/preview/resources/contacts/client/Client.ts">listContactActivities</a>({ ...params }) -> Intercom.ContactActivityList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of contact activity events for your workspace, such as when contacts are created, role updated, merged, or deleted. Events are returned oldest first.

{% admonition type="warning" name="Pagination" %}
  You can use pagination to limit the number of results returned. The default is `50` results per page, with a maximum of `150`.
  See the [pagination section](https://developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/pagination/#pagination-for-list-apis) for more details on how to use the `starting_after` param.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.contacts.listContactActivities({
    per_page: 1,
    starting_after: "starting_after"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListContactActivitiesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.contacts.<a href="/src/api/resources/preview/resources/contacts/client/Client.ts">listContacts</a>({ ...params }) -> Intercom.ContactList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all contacts (ie. users or leads) in your workspace.
{% admonition type="info" name="Merged contacts" %}
  Contacts that have been merged (via POST /contacts/merge) will not appear in list results. Only the target contact from the merge remains accessible.
{% /admonition %}
{% admonition type="warning" name="Pagination" %}
  You can use pagination to limit the number of results returned. The default is `10` results per page, with a maximum of `150`.
  See the [pagination section](https://developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/pagination/#pagination-for-list-apis) for more details on how to use the `starting_after` param.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.contacts.listContacts({
    include_merge_history: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListContactsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.contacts.<a href="/src/api/resources/preview/resources/contacts/client/Client.ts">createContact</a>({ ...params }) -> Intercom.CreateContactResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new contact (ie. user or lead).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.contacts.createContact({
    "email": "joebloggs@intercom.io"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateContactRequestTwo` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.contacts.<a href="/src/api/resources/preview/resources/contacts/client/Client.ts">showContactByExternalId</a>({ ...params }) -> Intercom.ShowContactByExternalIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single contact by external ID. Note that this endpoint only supports users and not leads.

{% admonition type="info" name="Merged contacts return 410 Gone" %}
  If the contact with this external ID has been merged into another contact, the API returns **HTTP 410 Gone** with a `Link` header pointing to the canonical (merged-into) contact. See `GET /contacts/{id}` for details on the response format.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.contacts.showContactByExternalId({
    external_id: "cdd29344-5e0c-4ef0-ac56-f9ba2979bc27",
    include_merge_history: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ShowContactByExternalIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.contacts.<a href="/src/api/resources/preview/resources/contacts/client/Client.ts">archiveContact</a>({ ...params }) -> Intercom.ContactArchived</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can archive a single contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.contacts.archiveContact({
    id: "63a07ddf05a32042dffac965"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ArchiveContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.contacts.<a href="/src/api/resources/preview/resources/contacts/client/Client.ts">unarchiveContact</a>({ ...params }) -> Intercom.ContactUnarchived</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can unarchive a single contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.contacts.unarchiveContact({
    id: "63a07ddf05a32042dffac965"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.UnarchiveContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.contacts.<a href="/src/api/resources/preview/resources/contacts/client/Client.ts">blockContact</a>({ ...params }) -> Intercom.ContactBlocked</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Block a single contact.<br>**Note:** conversations of the contact will also be archived during the process.<br>More details in [FAQ How do I block Inbox spam?](https://www.intercom.com/help/en/articles/8838656-inbox-faqs)
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.contacts.blockContact({
    id: "63a07ddf05a32042dffac965"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.BlockContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.contacts.<a href="/src/api/resources/preview/resources/contacts/client/Client.ts">listContactMergeHistory</a>({ ...params }) -> Intercom.MergeHistoryList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the paginated list of contacts that have been merged into a given contact.

Only available for contacts with a `user` role. Returns a `404` if the contact is not found or has a `lead` role.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.contacts.listContactMergeHistory({
    id: "63a07ddf05a32042dffac965",
    cursor: "cursor",
    per_page: 1,
    order: "asc"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListContactMergeHistoryRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.contacts.<a href="/src/api/resources/preview/resources/contacts/client/Client.ts">bulkCreateContacts</a>({ ...params }) -> Intercom.ContactsBulkJob</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can bulk create contacts by submitting an array of contact objects. This is a **strict create** and never updates an existing contact.

The endpoint creates an async job that processes the items in the background. Use the returned job ID with `GET /contacts/bulk/{id}` to check the job status.

Only the fields listed in the request schema below can be set. Any other fields in a contact object are ignored.

{% admonition type="info" name="Handling existing contacts" %}
  If a contact already exists with the given `external_id` or `email` (including an archived contact), that item is rejected and the job's `state` ends as `completed_with_errors`. New contacts in the same request are still created. The job `state` from `GET /contacts/bulk/{id}` is the signal that one or more items were rejected.

  Created contacts aren't returned with IDs in the response. Look them up afterwards with [Get a contact by External ID](/docs/references/preview/rest-api/api.intercom.io/contacts/showcontactbyexternalid) or [Search contacts](/docs/references/preview/rest-api/api.intercom.io/contacts/searchcontacts).
{% /admonition %}

{% admonition type="info" name="Limits" %}
  - Maximum of 100 contacts per request.
  - You can append tasks to an existing job by including `job.id` in the request body.
  - Tag application is best-effort and processed asynchronously: unknown tag IDs are skipped, and per-tag results are not returned in the job status.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.contacts.bulkCreateContacts({
    contacts: [{
            external_id: "abc123",
            email: "joe@bloggs.com",
            name: "Joe Bloggs",
            role: "user",
            phone: "+353871234567",
            avatar: "https://www.example.com/avatar_image.jpg",
            language_override: "fr",
            custom_attributes: {
                "plan": "pro"
            },
            signed_up_at: 1571672154,
            last_seen_at: 1571672154,
            owner_id: "321",
            unsubscribed_from_emails: false,
            companies: [{
                    company_id: "6",
                    name: "Blue Sun"
                }],
            tags: {
                add: [{
                        id: "123"
                    }]
            }
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.BulkCreateContactsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.contacts.<a href="/src/api/resources/preview/resources/contacts/client/Client.ts">bulkUpdateContacts</a>({ ...params }) -> Intercom.ContactsBulkJob</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can bulk update contacts by submitting an array of contact objects with the fields to update. Each contact must include an `id` field identifying the contact to update. You can also add or remove tags on each contact by including a `tags` object.

Only the fields listed in the request schema below can be set. Any other fields in a contact object are ignored.

The endpoint creates an async job that processes the updates in the background. Use the returned job ID with `GET /contacts/bulk/{id}` to check the job status.

{% admonition type="info" name="Limits" %}
  - Maximum of 100 contacts per request.
  - You can append tasks to an existing job by including `job.id` in the request body.
  - Tag application is best-effort and processed asynchronously: unknown tag IDs are skipped, and per-tag results are not returned in the job status.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.contacts.bulkUpdateContacts({
    contacts: [{
            id: "abc123",
            external_id: "ext123",
            email: "joe@bloggs.com",
            name: "Joe Bloggs",
            phone: "+353871234567",
            avatar: "https://www.example.com/avatar_image.jpg",
            owner_id: "321",
            unsubscribed_from_emails: false,
            language_override: "fr",
            custom_attributes: {
                "plan": "pro"
            },
            companies: [{
                    company_id: "6",
                    name: "Blue Sun"
                }],
            tags: {
                add: [{
                        id: "123"
                    }],
                remove: [{
                        id: "987"
                    }]
            }
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.BulkUpdateContactsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.contacts.<a href="/src/api/resources/preview/resources/contacts/client/Client.ts">bulkDeleteContacts</a>({ ...params }) -> Intercom.ContactsBulkJob</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete contacts in bulk by submitting an array of contact `id`s.

The endpoint creates an async job that processes the deletes in the background. Use the returned job ID with `GET /contacts/bulk/{id}` to check the job status.

{% admonition type="warning" name="Permanent deletion" %}
  A contact that doesn't exist, or can't be deleted, fails that item and the job's `state` ends as `completed_with_errors` (visible via `GET /contacts/bulk/{id}`) without failing the rest of the batch.
{% /admonition %}

{% admonition type="info" name="Limits" %}
  - Maximum of 100 contacts per request.
  - You can append tasks to an existing job by including `job.id` in the request body.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.contacts.bulkDeleteContacts({
    contacts: [{
            id: "abc123"
        }, {
            id: "def456"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.BulkDeleteContactsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.contacts.<a href="/src/api/resources/preview/resources/contacts/client/Client.ts">showBulkUpdateContactsJob</a>({ ...params }) -> Intercom.ContactsBulkJob</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can check the status of a bulk contact update job. The `state` field indicates the overall job progress: `pending`, `running`, `completed`, or `completed_with_errors`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.contacts.showBulkUpdateContactsJob({
    id: "job_v2_1"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ShowBulkUpdateContactsJobRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Subscription Types
<details><summary><code>client.preview.subscriptionTypes.<a href="/src/api/resources/preview/resources/subscriptionTypes/client/Client.ts">attachSubscriptionTypeToContact</a>({ ...params }) -> Intercom.SubscriptionType</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can add a specific subscription to a contact. In Intercom, we have two different subscription types based on user consent - opt-out and opt-in:

  1.Attaching a contact to an opt-out subscription type will opt that user out from receiving messages related to that subscription type.

  2.Attaching a contact to an opt-in subscription type will opt that user in to receiving messages related to that subscription type.

This will return a subscription type model for the subscription type that was added to the contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.subscriptionTypes.attachSubscriptionTypeToContact({
    contact_id: "63a07ddf05a32042dffac965",
    id: "37846",
    consent_type: "opt_in"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.AttachSubscriptionTypeToContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubscriptionTypesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.subscriptionTypes.<a href="/src/api/resources/preview/resources/subscriptionTypes/client/Client.ts">detachSubscriptionTypeToContact</a>({ ...params }) -> Intercom.SubscriptionType</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can remove a specific subscription from a contact. This will return a subscription type model for the subscription type that was removed from the contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.subscriptionTypes.detachSubscriptionTypeToContact({
    contact_id: "63a07ddf05a32042dffac965",
    id: "37846"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DetachSubscriptionTypeToContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubscriptionTypesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.subscriptionTypes.<a href="/src/api/resources/preview/resources/subscriptionTypes/client/Client.ts">listSubscriptionTypes</a>() -> Intercom.SubscriptionTypeList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can list all subscription types. A list of subscription type objects will be returned.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.subscriptionTypes.listSubscriptionTypes();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `SubscriptionTypesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Tags
<details><summary><code>client.preview.tags.<a href="/src/api/resources/preview/resources/tags/client/Client.ts">attachTagToContact</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can tag a specific contact. This will return a tag object for the tag that was added to the contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.tags.attachTagToContact({
    contact_id: "63a07ddf05a32042dffac965",
    id: "7522907"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.AttachTagToContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.tags.<a href="/src/api/resources/preview/resources/tags/client/Client.ts">detachTagFromContact</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can remove tag from a specific contact. This will return a tag object for the tag that was removed from the contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.tags.detachTagFromContact({
    contact_id: "63a07ddf05a32042dffac965",
    id: "7522907"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DetachTagFromContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.tags.<a href="/src/api/resources/preview/resources/tags/client/Client.ts">attachTagToConversation</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can tag a specific conversation. This will return a tag object for the tag that was added to the conversation.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.tags.attachTagToConversation({
    conversation_id: "64619700005694",
    id: "7522907",
    admin_id: "780"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.AttachTagToConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.tags.<a href="/src/api/resources/preview/resources/tags/client/Client.ts">detachTagFromConversation</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can remove tag from a specific conversation. This will return a tag object for the tag that was removed from the conversation.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.tags.detachTagFromConversation({
    conversation_id: "64619700005694",
    id: "7522907",
    admin_id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DetachTagFromConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.tags.<a href="/src/api/resources/preview/resources/tags/client/Client.ts">listTags</a>() -> Intercom.TagList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all tags for a given workspace.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.tags.listTags();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.tags.<a href="/src/api/resources/preview/resources/tags/client/Client.ts">createTag</a>({ ...params }) -> Intercom.TagCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can use this endpoint to perform the following operations:

  **1. Create a new tag:** You can create a new tag by passing in the tag name as specified in "Create or Update Tag Request Payload" described below.

  **2. Update an existing tag:** You can update an existing tag by passing the id of the tag as specified in "Create or Update Tag Request Payload" described below.

  **3. Tag Companies:** You can tag single company or a list of companies. You can tag a company by passing in the tag name and the company details as specified in "Tag Company Request Payload" described below. Also, if the tag doesn't exist then a new one will be created automatically.

  **4. Untag Companies:** You can untag a single company or a list of companies. You can untag a company by passing in the tag id and the company details as specified in "Untag Company Request Payload" described below.

  **5. Tag Multiple Users:** You can tag a list of users. You can tag the users by passing in the tag name and the user details as specified in "Tag Users Request Payload" described below.

Each operation will return a tag object.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.tags.createTag({
    name: "test"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateTagRequestBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.tags.<a href="/src/api/resources/preview/resources/tags/client/Client.ts">findTag</a>({ ...params }) -> Intercom.TagBasic</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of tags that are on the workspace by their id.
This will return a tag object.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.tags.findTag({
    id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.FindTagRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.tags.<a href="/src/api/resources/preview/resources/tags/client/Client.ts">deleteTag</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete the details of tags that are on the workspace by passing in the id.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.tags.deleteTag({
    id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DeleteTagRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.tags.<a href="/src/api/resources/preview/resources/tags/client/Client.ts">attachTagToTicket</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can tag a specific ticket. This will return a tag object for the tag that was added to the ticket.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.tags.attachTagToTicket({
    ticket_id: "64619700005694",
    id: "7522907",
    admin_id: "780"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.AttachTagToTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.tags.<a href="/src/api/resources/preview/resources/tags/client/Client.ts">detachTagFromTicket</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can remove tag from a specific ticket. This will return a tag object for the tag that was removed from the ticket.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.tags.detachTagFromTicket({
    ticket_id: "64619700005694",
    id: "7522907",
    admin_id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DetachTagFromTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Banners
<details><summary><code>client.preview.banners.<a href="/src/api/resources/preview/resources/banners/client/Client.ts">listContactBanners</a>({ ...params }) -> Intercom.BannerList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the banners a contact currently matches, so you can display them on
surfaces outside the Messenger (native mobile apps, kiosks, embedded tools).

Each banner in the response includes a `view_id`. Use it to record a dismissal
with the dismiss endpoint. A returned banner is treated as shown: requesting
this endpoint records an impression for each banner returned, so call it at the
point you are about to display the banners, not speculatively.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.banners.listContactBanners({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListContactBannersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BannersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.banners.<a href="/src/api/resources/preview/resources/banners/client/Client.ts">dismissContactBanner</a>({ ...params }) -> Intercom.BannerDismiss</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Records that a contact has dismissed a banner. Dismissals are shared across
surfaces, so a banner dismissed through this endpoint will also stop appearing
in the web Messenger for that contact, and vice versa.

The request is idempotent: dismissing an already-dismissed banner succeeds and
returns the same response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.banners.dismissContactBanner({
    id: "id",
    view_id: "view_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DismissContactBannerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BannersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Content
<details><summary><code>client.preview.content.<a href="/src/api/resources/preview/resources/content/client/Client.ts">bulkContentActions</a>({ ...params }) -> Intercom.ContentBulkActionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Asynchronously run a bulk action over up to 1,000 Knowledge Hub content items.

Six actions are supported:
  * `publish` and `unpublish` — apply to `article_content` only.
  * `delete` — permanently delete content (excludes synced sources and `external_content`).
  * `set_availability` — toggle Fin AI Agent, Copilot, and Sales Agent availability flags.
  * `set_audience` — manage segment membership on content.
  * `update_tags` — apply and/or remove existing tags on content. Unlike the other
    actions, `update_tags` addresses articles by the parent `article` id, not
    `article_content`. Tags must already exist and not be archived; supply at least one of
    `add_tag_ids` / `remove_tag_ids`.

The endpoint validates the request, enqueues background work, and returns 202 with a
placeholder envelope. Items whose `type` is not in the action's allowlist are silently
dropped before processing. Articles imported from synced sources (Confluence, Notion,
Zendesk, Salesforce Knowledge, etc.) are silently skipped on `delete` — they can only be
removed by disconnecting the underlying import source.

Requires the `write_content` OAuth scope. Set `Intercom-Version: Preview`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.content.bulkContentActions({
    action: "publish",
    content_ids: [{
            type: "article_content",
            id: "12345678"
        }, {
            type: "article_content",
            id: "12345679"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ContentBulkActionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.content.<a href="/src/api/resources/preview/resources/content/client/Client.ts">searchContent</a>({ ...params }) -> Intercom.ContentSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search the knowledge base contents — articles, snippets, external pages, uploaded files, and internal articles — using a keyword query.

Each result row has a `type` discriminator. Most types (`content_snippet`, `external_content`, `file_source_content`, `internal_article`) return a flat `{ type, id, title }` shape. Help center articles return a nested shape with a `contents[]` array, one entry per locale.

Requires the `read_content` OAuth scope.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.content.searchContent({
    query: "billing",
    page: 1,
    per_page: 1,
    tag_operator: "IN",
    folder_entity_type: "folder",
    copilot_state: "on",
    fin_service_state: "on",
    fin_sales_state: "on",
    created_at_after: 1,
    created_at_before: 1,
    updated_at_after: 1,
    updated_at_before: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.SearchContentRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Content Snippets
<details><summary><code>client.preview.contentSnippets.<a href="/src/api/resources/preview/resources/contentSnippets/client/Client.ts">listContentSnippets</a>({ ...params }) -> Intercom.ContentSnippetList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all content snippets for a workspace.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.contentSnippets.listContentSnippets({
    page: 1,
    per_page: 20
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListContentSnippetsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContentSnippetsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.contentSnippets.<a href="/src/api/resources/preview/resources/contentSnippets/client/Client.ts">createContentSnippet</a>({ ...params }) -> Intercom.ContentSnippet</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new content snippet.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.contentSnippets.createContentSnippet({
    title: "How to reset your password",
    json_blocks: [{
            "type": "paragraph",
            "text": "Navigate to Settings > Security > Reset password."
        }],
    locale: "en",
    audience_ids: [1, 2]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ContentSnippetCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContentSnippetsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.contentSnippets.<a href="/src/api/resources/preview/resources/contentSnippets/client/Client.ts">getContentSnippet</a>({ ...params }) -> Intercom.ContentSnippet</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a single content snippet by its id.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.contentSnippets.getContentSnippet({
    id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.GetContentSnippetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContentSnippetsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.contentSnippets.<a href="/src/api/resources/preview/resources/contentSnippets/client/Client.ts">updateContentSnippet</a>({ ...params }) -> Intercom.ContentSnippet</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update an existing content snippet.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.contentSnippets.updateContentSnippet({
    id: "123",
    title: "How to reset your password (updated)",
    json_blocks: [{
            "type": "paragraph",
            "text": "Go to Settings > Security > Reset password and follow the steps."
        }],
    audience_ids: [1, 2]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ContentSnippetUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContentSnippetsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.contentSnippets.<a href="/src/api/resources/preview/resources/contentSnippets/client/Client.ts">deleteContentSnippet</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a single content snippet by its id.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.contentSnippets.deleteContentSnippet({
    id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DeleteContentSnippetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContentSnippetsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.contentSnippets.<a href="/src/api/resources/preview/resources/contentSnippets/client/Client.ts">attachTagToContentSnippet</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Apply an existing tag to a content snippet. Returns the tag that was applied.

The tag must already exist in the workspace (create tags with the Tags API),
and the authenticating teammate must have the `manage_knowledge_base_content`
permission.

Requires the `read_write_content_snippets` OAuth scope. Set `Intercom-Version: Preview`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.contentSnippets.attachTagToContentSnippet({
    content_snippet_id: "123",
    id: "7522907"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.AttachTagToContentSnippetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContentSnippetsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.contentSnippets.<a href="/src/api/resources/preview/resources/contentSnippets/client/Client.ts">detachTagFromContentSnippet</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Remove a tag from a content snippet. Returns the tag that was removed, with
null `applied_at` and `applied_by`.

The authenticating teammate must have the `manage_knowledge_base_content`
permission.

Requires the `read_write_content_snippets` OAuth scope. Set `Intercom-Version: Preview`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.contentSnippets.detachTagFromContentSnippet({
    content_snippet_id: "123",
    id: "7522907"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DetachTagFromContentSnippetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContentSnippetsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Conversations
<details><summary><code>client.preview.conversations.<a href="/src/api/resources/preview/resources/conversations/client/Client.ts">listConversations</a>({ ...params }) -> Intercom.ConversationList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all conversations.

You can optionally request the result page size and the cursor to start after to fetch the result.
{% admonition type="warning" name="Pagination" %}
  You can use pagination to limit the number of results returned. The default is `20` results per page.
  See the [pagination section](https://developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/pagination/#pagination-for-list-apis) for more details on how to use the `starting_after` param.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.conversations.listConversations({
    per_page: 1,
    starting_after: "starting_after",
    include_monitors: true,
    include_scorecards: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListConversationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.conversations.<a href="/src/api/resources/preview/resources/conversations/client/Client.ts">createConversation</a>({ ...params }) -> Intercom.Message</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a conversation that has been initiated by a contact (ie. user or lead).
The conversation can be an in-app message only.

{% admonition type="info" name="Sending for visitors" %}
You can also send a message from a visitor by specifying their `user_id` or `id` value in the `from` field, along with a `type` field value of `contact`.
This visitor will be automatically converted to a contact with a lead role once the conversation is created.
{% /admonition %}

This will return the Message model that has been created.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.conversations.createConversation({
    from: {
        type: "user",
        id: "6762f11b1bb69f9f2193bba3"
    },
    body: "Hello there",
    brand_id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.CreateConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.conversations.<a href="/src/api/resources/preview/resources/conversations/client/Client.ts">retrieveConversation</a>({ ...params }) -> Intercom.Conversation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


You can fetch the details of a single conversation.

This will return a single Conversation model with all its conversation parts.

{% admonition type="warning" name="Hard limit of 500 parts" %}
The maximum number of conversation parts that can be returned via the API is 500. If you have more than that we will return the 500 most recent conversation parts. `include_part_types` and `exclude_part_types` are applied before this limit, so filtering returns the 500 most recent matching parts. `conversation_parts.total_count` counts the parts in this response, after filtering — it is not the conversation's total part count.
{% /admonition %}

For AI agent conversation metadata, please note that you need to have the agent enabled in your workspace, which is a [paid feature](https://www.intercom.com/help/en/articles/8205718-fin-resolutions#h_97f8c2e671).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.conversations.retrieveConversation({
    id: 1,
    display_as: "plaintext",
    include_translations: true,
    include_email_history: true,
    include_monitors: true,
    include_scorecards: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.RetrieveConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.conversations.<a href="/src/api/resources/preview/resources/conversations/client/Client.ts">updateConversation</a>({ ...params }) -> Intercom.Conversation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


You can update an existing conversation.

{% admonition type="info" name="Replying and other actions" %}
If you want to reply to a coveration or take an action such as assign, unassign, open, close or snooze, take a look at the reply and manage endpoints.
{% /admonition %}

{% admonition type="info" %}
  This endpoint handles both **conversation updates** and **custom object associations**.

  See _`update a conversation with an association to a custom object instance`_ in the request/response examples to see the custom object association format.
{% /admonition %}

{% admonition type="danger" name="Breaking change: duplicate custom attribute names" %}
The `PUT /conversations/{id}` endpoint now returns a `400 INVALID_PARAMETER` error when the request includes `custom_attributes` and your workspace contains multiple non-archived conversation custom attributes with the same name. Previously, the update would silently apply to a non-deterministic attribute.

To resolve, rename or archive the duplicate attribute so each name is unique, then retry the request. You can do this through:

- The Conversation Attributes API — list with `GET /conversations/attributes`, then rename with `PUT /conversations/attributes/{id}` or archive with `DELETE /conversations/attributes/{id}`
- Your workspace settings (Settings → Data → Conversations)
{% /admonition %}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.conversations.updateConversation({
    id: 1,
    display_as: "plaintext",
    read: true,
    title: "new conversation title",
    priority: "high",
    admin_id: "394051",
    custom_attributes: {
        "issue_type": "Billing"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.UpdateConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.conversations.<a href="/src/api/resources/preview/resources/conversations/client/Client.ts">deleteConversation</a>({ ...params }) -> Intercom.ConversationDeleted</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

{% admonition type="warning" name="Irreversible operation" %}
Deleting a conversation is permanent and cannot be reversed.
{% /admonition %}

You can delete a single conversation. The behavior depends on the `retain_metrics` parameter:

- **With `retain_metrics=true` (default)**: Deletes the conversation while retaining reporting data. The conversation will still appear in reporting, though some data may be incomplete due to the deletion.

- **With `retain_metrics=false`**: Deletes the conversation and all associated reporting data. The conversation will be completely removed from both the inbox and all reporting.

{% admonition type="info" name="Required scope for retain_metrics=false" %}
Using `retain_metrics=false` requires the `delete_conversations_and_metrics` OAuth scope.
{% /admonition %}

For more info, see [this help center article](https://www.intercom.com/help/en/articles/13885146-deleting-a-conversation).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.conversations.deleteConversation({
    id: 1,
    retain_metrics: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DeleteConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.conversations.<a href="/src/api/resources/preview/resources/conversations/client/Client.ts">searchConversations</a>({ ...params }) -> Intercom.ConversationList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can search for multiple conversations by the value of their attributes in order to fetch exactly which ones you want.

To search for conversations, you need to send a `POST` request to `https://api.intercom.io/conversations/search`.

This will accept a query object in the body which will define your filters in order to search for conversations.
{% admonition type="warning" name="Optimizing search queries" %}
  Search queries can be complex, so optimizing them can help the performance of your search.
  Use the `AND` and `OR` operators to combine multiple filters to get the exact results you need and utilize
  pagination to limit the number of results returned. The default is `20` results per page and maximum is `150`.
  See the [pagination section](https://developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/pagination/#example-search-conversations-request) for more details on how to use the `starting_after` param.
{% /admonition %}

### Nesting & Limitations

You can nest these filters in order to get even more granular insights that pinpoint exactly what you need. Example: (1 OR 2) AND (3 OR 4).
There are some limitations to the amount of multiple's there can be:
- There's a limit of max 2 nested filters
- There's a limit of max 15 filters for each AND or OR group

### Accepted Fields

Most keys listed in the conversation model are searchable, whether writeable or not. The value you search for has to match the accepted type, otherwise the query will fail (ie. as `created_at` accepts a date, the `value` cannot be a string such as `"foorbar"`).
The `source.body` field is unique as the search will not be performed against the entire value, but instead against every element of the value separately. For example, when searching for a conversation with a `"I need support"` body - the query should contain a `=` operator with the value `"support"` for such conversation to be returned. A query with a `=` operator and a `"need support"` value will not yield a result.

| Field                                     | Type                                                                                                                                                   |
| :---------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                                        | String                                                                                                                                                 |
| created_at                                | Date (UNIX timestamp)                                                                                                                                  |
| updated_at                                | Date (UNIX timestamp)                                                                                                                                  |
| source.type                               | String<br>Accepted fields are `conversation`, `email`, `facebook`, `instagram`, `phone_call`, `phone_switch`, `push`, `sms`, `twitter` and `whatsapp`. |
| source.id                                 | String                                                                                                                                                 |
| source.delivered_as                       | String                                                                                                                                                 |
| source.subject                            | String                                                                                                                                                 |
| source.body                               | String                                                                                                                                                 |
| source.author.id                          | String                                                                                                                                                 |
| source.author.type                        | String                                                                                                                                                 |
| source.author.name                        | String                                                                                                                                                 |
| source.author.email                       | String                                                                                                                                                 |
| source.url                                | String                                                                                                                                                 |
| contact_ids                               | String                                                                                                                                                 |
| teammate_ids                              | String                                                                                                                                                 |
| admin_assignee_id                         | Integer                                                                                                                                                |
| team_assignee_id                          | Integer                                                                                                                                                |
| channel_initiated                         | String                                                                                                                                                 |
| open                                      | Boolean                                                                                                                                                |
| read                                      | Boolean                                                                                                                                                |
| state                                     | String                                                                                                                                                 |
| waiting_since                             | Date (UNIX timestamp)                                                                                                                                  |
| snoozed_until                             | Date (UNIX timestamp)                                                                                                                                  |
| tag_ids                                   | String                                                                                                                                                 |
| priority                                  | String                                                                                                                                                 |
| statistics.time_to_assignment             | Integer                                                                                                                                                |
| statistics.time_to_admin_reply            | Integer                                                                                                                                                |
| statistics.time_to_first_close            | Integer                                                                                                                                                |
| statistics.time_to_last_close             | Integer                                                                                                                                                |
| statistics.median_time_to_reply           | Integer                                                                                                                                                |
| statistics.first_contact_reply_at         | Date (UNIX timestamp)                                                                                                                                  |
| statistics.first_assignment_at            | Date (UNIX timestamp)                                                                                                                                  |
| statistics.first_admin_reply_at           | Date (UNIX timestamp)                                                                                                                                  |
| statistics.first_close_at                 | Date (UNIX timestamp)                                                                                                                                  |
| statistics.last_assignment_at             | Date (UNIX timestamp)                                                                                                                                  |
| statistics.last_assignment_admin_reply_at | Date (UNIX timestamp)                                                                                                                                  |
| statistics.last_contact_reply_at          | Date (UNIX timestamp)                                                                                                                                  |
| statistics.last_admin_reply_at            | Date (UNIX timestamp)                                                                                                                                  |
| statistics.last_close_at                  | Date (UNIX timestamp)                                                                                                                                  |
| statistics.last_closed_by_id              | String                                                                                                                                                 |
| statistics.count_reopens                  | Integer                                                                                                                                                |
| statistics.count_assignments              | Integer                                                                                                                                                |
| statistics.count_conversation_parts       | Integer                                                                                                                                                |
| conversation_rating.requested_at          | Date (UNIX timestamp)                                                                                                                                  |
| conversation_rating.replied_at            | Date (UNIX timestamp)                                                                                                                                  |
| conversation_rating.score                 | Integer                                                                                                                                                |
| conversation_rating.remark                | String                                                                                                                                                 |
| conversation_rating.contact_id            | String                                                                                                                                                 |
| conversation_rating.admin_d               | String                                                                                                                                                 |
| ai_agent_participated                     | Boolean                                                                                                                                                |
| ai_agent.resolution_state                 | String                                                                                                                                                 |
| ai_agent.last_answer_type                 | String                                                                                                                                                 |
| ai_agent.rating                           | Integer                                                                                                                                                |
| ai_agent.rating_remark                    | String                                                                                                                                                 |
| ai_agent.source_type                      | String                                                                                                                                                 |
| ai_agent.source_title                     | String                                                                                                                                                 |

### Accepted Operators

The table below shows the operators you can use to define how you want to search for the value.  The operator should be put in as a string (`"="`). The operator has to be compatible with the field's type  (eg. you cannot search with `>` for a given string value as it's only compatible for integer's and dates).

| Operator | Valid Types                    | Description                                                  |
| :------- | :----------------------------- | :----------------------------------------------------------- |
| =        | All                            | Equals                                                       |
| !=       | All                            | Doesn't Equal                                                |
| IN       | All                            | In  Shortcut for `OR` queries  Values most be in Array       |
| NIN      | All                            | Not In  Shortcut for `OR !` queries  Values must be in Array |
| >        | Integer  Date (UNIX Timestamp) | Greater (or equal) than                                      |
| <       | Integer  Date (UNIX Timestamp) | Lower (or equal) than                                        |
| ~        | String                         | Contains                                                     |
| !~       | String                         | Doesn't Contain                                              |
| ^        | String                         | Starts With                                                  |
| $        | String                         | Ends With                                                    |
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.conversations.searchConversations({
    include_monitors: true,
    include_scorecards: true,
    body: {
        query: {
            operator: "AND",
            value: [{
                    field: "created_at",
                    operator: ">",
                    value: "1306054154"
                }]
        },
        pagination: {
            per_page: 5
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.SearchConversationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.conversations.<a href="/src/api/resources/preview/resources/conversations/client/Client.ts">replyConversation</a>({ ...params }) -> Intercom.Conversation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can reply to a conversation with a message from an admin or on behalf of a contact, or with a note for admins.

{% admonition type="warning" name="Bot replies to inbound email" %}
By default, bot or Operator replies to an inbound email conversation aren't sent to your customer. The reply is stored as an unnotifiable bot comment, and no `seen` receipt is generated until an email is actually delivered.

To send these replies as outbound emails, reach out to your accounts team to enable the email-reply feature flag for your workspace.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.conversations.replyConversation({
    id: "123 or \"last\"",
    body: {
        message_type: "comment",
        type: "user",
        body: "Thanks again :)",
        intercom_user_id: "6762f1571bb69f9f2193bbbb"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ReplyConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.conversations.<a href="/src/api/resources/preview/resources/conversations/client/Client.ts">manageConversation</a>({ ...params }) -> Intercom.Conversation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

For managing conversations you can:
- Close a conversation
- Snooze a conversation to reopen on a future date
- Open a conversation which is `snoozed` or `closed`
- Assign a conversation to an admin and/or team.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.conversations.manageConversation({
    id: "123",
    body: {
        message_type: "close",
        type: "admin",
        admin_id: "12345"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ManageConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.conversations.<a href="/src/api/resources/preview/resources/conversations/client/Client.ts">listHandlingEvents</a>({ ...params }) -> Intercom.HandlingEventList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all pause/resume events for a conversation. These events track when teammates paused or resumed handling a conversation.

Requires the `read_conversations` OAuth scope.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.conversations.listHandlingEvents({
    id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListHandlingEventsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.conversations.<a href="/src/api/resources/preview/resources/conversations/client/Client.ts">listHitlEvents</a>({ ...params }) -> Intercom.HitlEventList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List the human-in-the-loop (HITL) events for a conversation. When Fin is unsure of an answer it can consult a teammate before replying, proposing a draft that the teammate approves, steers with free-text feedback, or takes over. Each consultation is returned as a series of events, oldest first, across every consultation on the conversation.

Requires the `read_conversations` OAuth scope, and the caller must be able to access the conversation.

Events are only recorded once a consultation has ended, so a consultation still awaiting a teammate does not appear.

Which fields appear in `data` depends on `event_type`:

| `event_type` | `data` fields |
|---|---|
| `fin_consultation_started` | `channel`, `rule_threshold_percent`, `confidence_percent`, `sharp_ask`, `ask_rationale`, `issue_summary`, `customer_question` |
| `fin_draft_proposed` | `draft` |
| `fin_teammate_input_received` | `round_index`, `teammate_input`, `reviewer_admin_id`, `regeneration_outcome` |
| `fin_draft_revised` | `round_index`, `revised_draft`, `regeneration_outcome` |
| `fin_consultation_finished` | `outcome`, `approved_draft_type`, `final_draft`, `sent_text`, `reviewer_admin_id`, `duration_seconds`, `rounds_count`, `payload_truncated` |

A consultation always produces a `fin_consultation_started` and a `fin_consultation_finished` event. `fin_draft_proposed` appears when Fin proposed a draft. `fin_teammate_input_received` appears once per round of teammate feedback, and `fin_draft_revised` once per round where Fin produced a revised draft in response.

Notes on interpreting the response:

- `hitl_cycle_id` identifies the consultation, so it is the same on every event of one consultation. It is not unique per event. A conversation can hold several consultations — a consultation that replaces an outstanding one finishes with an `outcome` of `superseded`.
- `conversation_part_id` links an event to a conversation part where one exists. It is `null` in ordinary cases: teammate feedback given through the inbox creates no conversation part, a revised draft has no part of its own, and a consultation that escalated or was superseded sent no reply.
- `created_at` on `fin_draft_proposed` is approximate. It reports when the consultation started, which is when the draft was proposed.
- `rule_id`, `rule_name` and `rule_threshold_percent` are recorded when the consultation begins and are not updated afterwards, so a rule that has since been renamed or retuned will not match its current settings. They are `null` for consultations not triggered by a rule.
- `reviewer_admin_id` identifies the teammate involved in that event: on `fin_teammate_input_received` the teammate who gave the feedback, and on `fin_consultation_finished` the teammate who approved the draft or took over. On a consultation with several rounds these can be different teammates.
- `rounds_count` counts every round of teammate feedback the consultation had. Only the ten most recent rounds are retained, so a heavily steered consultation returns fewer `fin_teammate_input_received` events than `rounds_count`.
- Redacting a conversation removes this data. Depending on how it was redacted, the conversation either returns no events or returns events whose text fields are all `null`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.conversations.listHitlEvents({
    id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListHitlEventsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.conversations.<a href="/src/api/resources/preview/resources/conversations/client/Client.ts">listSideConversations</a>({ ...params }) -> Intercom.SideConversationList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List side conversations for a given conversation. Side conversations are internal threads created by teammates from within a conversation.

Each side conversation includes its conversation parts (messages). Results are paginated.

Requires the `read_conversations` OAuth scope.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.conversations.listSideConversations({
    id: "123",
    page: 1,
    per_page: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListSideConversationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.conversations.<a href="/src/api/resources/preview/resources/conversations/client/Client.ts">mergeConversation</a>({ ...params }) -> Intercom.Conversation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Merge a secondary (source) conversation into a primary (target) conversation.
The secondary conversation is closed and linked to the primary, which
becomes the surviving thread. Returns the primary conversation on success.

Requires `write_conversations` OAuth scope. When the secondary is a ticket,
`write_tickets` scope is also required.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.conversations.mergeConversation({
    id: "123",
    merge_into_conversation_id: 456
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.MergeConversationsRequestBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.conversations.<a href="/src/api/resources/preview/resources/conversations/client/Client.ts">convertConversationToTicket</a>({ ...params }) -> Intercom.Ticket | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can convert a conversation to a ticket.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.conversations.convertConversationToTicket({
    id: 1,
    ticket_type_id: "53"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ConvertConversationToTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.conversations.<a href="/src/api/resources/preview/resources/conversations/client/Client.ts">listDeletedConversationIds</a>({ ...params }) -> Intercom.DeletedConversationList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all deleted conversation IDs.

{% admonition type="warning" name="Pagination" %}
  You can use pagination to limit the number of results returned. The default is `20` results per page. You can navigate to next pages using the `page` param.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.conversations.listDeletedConversationIds({
    page: 1,
    per_page: 1,
    order: "desc"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListDeletedConversationIdsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Conversation Parts
<details><summary><code>client.preview.conversationParts.<a href="/src/api/resources/preview/resources/conversationParts/client/Client.ts">updateConversationPart</a>({ ...params }) -> Intercom.ConversationPart</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update properties of a conversation part. Currently supports updating the send state of an external reply or marking a part as seen by an admin.

{% admonition type="warning" name="Experimental" %}
  This is an experimental endpoint. It requires a valid HMAC secret for authentication in addition to the standard bearer token.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.conversationParts.updateConversationPart({
    conversation_id: "123",
    id: "456",
    send_state: "sent",
    info_message: "Message delivered successfully",
    experimental: true,
    secret: "hmac_secret_value"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.UpdateConversationPartRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationPartsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.conversationParts.<a href="/src/api/resources/preview/resources/conversationParts/client/Client.ts">redactConversation</a>({ ...params }) -> Intercom.Conversation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can redact a conversation part or the source message of a conversation (as seen in the source object).

{% admonition type="info" name="Redacting parts and messages" %}
If you are redacting a conversation part, it must have a `body`. If you are redacting a source message, it must have been created by a contact. We will return a `conversation_part_not_redactable` error if these criteria are not met.
{% /admonition %}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.conversationParts.redactConversation({
    type: "conversation_part",
    conversation_id: "19894788788",
    conversation_part_id: "19381789428"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.RedactConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationPartsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Conversation Participants
<details><summary><code>client.preview.conversationParticipants.<a href="/src/api/resources/preview/resources/conversationParticipants/client/Client.ts">attachContactToConversation</a>({ ...params }) -> Intercom.ConversationParticipantsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can add participants who are contacts to a conversation, on behalf of either another contact or an admin.

{% admonition type="warning" name="Contacts without an email" %}
If you add a contact via the email parameter and there is no user/lead found on that workspace with he given email, then we will create a new contact with `role` set to `lead`.
{% /admonition %}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.conversationParticipants.attachContactToConversation({
    id: "123",
    admin_id: "12345",
    customer: {
        intercom_user_id: "6762f19b1bb69f9f2193bbd4"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.AttachContactToConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationParticipantsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.conversationParticipants.<a href="/src/api/resources/preview/resources/conversationParticipants/client/Client.ts">detachContactFromConversation</a>({ ...params }) -> Intercom.ConversationParticipantsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can remove participants who are contacts from a group conversation, on behalf of an admin.

{% admonition type="warning" name="Removing the last participant" %}
You cannot remove the last remaining contact from a conversation.
{% /admonition %}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.conversationParticipants.detachContactFromConversation({
    conversation_id: "123",
    contact_id: "123",
    admin_id: "5017690"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DetachContactFromConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationParticipantsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Conversations Attributes
<details><summary><code>client.preview.conversationsAttributes.<a href="/src/api/resources/preview/resources/conversationsAttributes/client/Client.ts">listConversationAttributes</a>({ ...params }) -> Intercom.ConversationAttributeList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all conversation attributes for your workspace.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.conversationsAttributes.listConversationAttributes({
    include_archived: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListConversationAttributesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsAttributesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.conversationsAttributes.<a href="/src/api/resources/preview/resources/conversationsAttributes/client/Client.ts">createConversationAttribute</a>({ ...params }) -> Intercom.ConversationAttribute</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new conversation attribute.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.conversationsAttributes.createConversationAttribute({
    data_type: "string",
    name: "api_test_attr"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateConversationAttributeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsAttributesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.conversationsAttributes.<a href="/src/api/resources/preview/resources/conversationsAttributes/client/Client.ts">getConversationAttribute</a>({ ...params }) -> Intercom.ConversationAttribute</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a single conversation attribute by ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.conversationsAttributes.getConversationAttribute({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.GetConversationAttributeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsAttributesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.conversationsAttributes.<a href="/src/api/resources/preview/resources/conversationsAttributes/client/Client.ts">updateConversationAttribute</a>({ ...params }) -> Intercom.ConversationAttribute</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an existing conversation attribute.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.conversationsAttributes.updateConversationAttribute({
    id: 1,
    name: "api_test_renamed",
    description: "Updated via API"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.UpdateConversationAttributeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsAttributesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.conversationsAttributes.<a href="/src/api/resources/preview/resources/conversationsAttributes/client/Client.ts">deleteConversationAttribute</a>({ ...params }) -> Intercom.ConversationAttribute</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Archive a conversation attribute (soft delete). The attribute is marked as archived but not permanently deleted.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.conversationsAttributes.deleteConversationAttribute({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DeleteConversationAttributeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsAttributesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.conversationsAttributes.<a href="/src/api/resources/preview/resources/conversationsAttributes/client/Client.ts">createConversationAttributeOption</a>({ ...params }) -> Intercom.ConversationAttribute</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a new option to a list-type conversation attribute. Returns the full attribute with the updated options array.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.conversationsAttributes.createConversationAttributeOption({
    id: 1,
    body: {
        label: "High"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.CreateConversationAttributeOptionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsAttributesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.conversationsAttributes.<a href="/src/api/resources/preview/resources/conversationsAttributes/client/Client.ts">updateConversationAttributeOption</a>({ ...params }) -> Intercom.ConversationAttribute</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update the label of a single option on a list-type conversation attribute. Returns the full attribute with the updated options array.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.conversationsAttributes.updateConversationAttributeOption({
    id: 1,
    option_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    label: "Renamed"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.UpdateConversationAttributeOptionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsAttributesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.conversationsAttributes.<a href="/src/api/resources/preview/resources/conversationsAttributes/client/Client.ts">deleteConversationAttributeOption</a>({ ...params }) -> Intercom.ConversationAttribute</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Archive a single option on a list-type conversation attribute (soft delete). The option remains in the response with `archived: true`. Returns the full attribute with the updated options array.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.conversationsAttributes.deleteConversationAttributeOption({
    id: 1,
    option_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DeleteConversationAttributeOptionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsAttributesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Custom Object Instances
<details><summary><code>client.preview.customObjectInstances.<a href="/src/api/resources/preview/resources/customObjectInstances/client/Client.ts">listCustomObjectInstances</a>({ ...params }) -> Intercom.CustomObjectInstancesPaginatedList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List instances of a custom object type. Three modes are supported:
- **No filter** — returns all instances for the type.
- **`references_contact_id`** — returns instances associated with the given contact.
- **`references_conversation_id`** — returns instances associated with the given conversation.

When **`external_id`** is provided, returns a single matching instance (not a list).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.customObjectInstances.listCustomObjectInstances({
    custom_object_type_identifier: "Order",
    references_contact_id: "references_contact_id",
    references_conversation_id: "references_conversation_id",
    external_id: "external_id",
    page: 1,
    per_page: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListCustomObjectInstancesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomObjectInstancesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.customObjectInstances.<a href="/src/api/resources/preview/resources/customObjectInstances/client/Client.ts">createCustomObjectInstances</a>({ ...params }) -> Intercom.CustomObjectInstance | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create or update a custom object instance
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.customObjectInstances.createCustomObjectInstances({
    custom_object_type_identifier: "Order",
    external_id: "123",
    external_created_at: 1392036272,
    external_updated_at: 1392036272,
    custom_attributes: {
        "order_number": "ORDER-12345",
        "total_amount": "custom_attributes"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.CreateOrUpdateCustomObjectInstanceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomObjectInstancesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.customObjectInstances.<a href="/src/api/resources/preview/resources/customObjectInstances/client/Client.ts">deleteCustomObjectInstancesById</a>({ ...params }) -> Intercom.CustomObjectInstanceDeleted</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a single Custom Object instance by external_id.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.customObjectInstances.deleteCustomObjectInstancesById({
    custom_object_type_identifier: "Order",
    external_id: "external_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DeleteCustomObjectInstancesByIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomObjectInstancesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.customObjectInstances.<a href="/src/api/resources/preview/resources/customObjectInstances/client/Client.ts">getCustomObjectInstancesById</a>({ ...params }) -> Intercom.CustomObjectInstance | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch a Custom Object Instance by id.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.customObjectInstances.getCustomObjectInstancesById({
    custom_object_type_identifier: "Order",
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.GetCustomObjectInstancesByIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomObjectInstancesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.customObjectInstances.<a href="/src/api/resources/preview/resources/customObjectInstances/client/Client.ts">deleteCustomObjectInstancesByExternalId</a>({ ...params }) -> Intercom.CustomObjectInstanceDeleted</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a single Custom Object instance using the Intercom defined id.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.customObjectInstances.deleteCustomObjectInstancesByExternalId({
    custom_object_type_identifier: "Order",
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DeleteCustomObjectInstancesByExternalIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomObjectInstancesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Data Attributes
<details><summary><code>client.preview.dataAttributes.<a href="/src/api/resources/preview/resources/dataAttributes/client/Client.ts">lisDataAttributes</a>({ ...params }) -> Intercom.DataAttributeList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all data attributes belonging to a workspace for contacts or companies.

{% admonition type="warning" name="Conversation attributes removed" %}
Conversation attributes are no longer returned by this endpoint. Calling without a `model` parameter no longer includes them in the response, and `model=conversation` returns a `422` error. Use [GET /conversations/attributes](/docs/references/preview/rest-api/api.intercom.io/conversations-attributes/listconversationattributes) instead.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.dataAttributes.lisDataAttributes({
    model: "contact",
    include_archived: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.LisDataAttributesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataAttributesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.dataAttributes.<a href="/src/api/resources/preview/resources/dataAttributes/client/Client.ts">createDataAttribute</a>({ ...params }) -> Intercom.DataAttribute</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a data attributes for a `contact` or a `company`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.dataAttributes.createDataAttribute({
    "key": "value"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `unknown` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataAttributesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.dataAttributes.<a href="/src/api/resources/preview/resources/dataAttributes/client/Client.ts">updateDataAttribute</a>({ ...params }) -> Intercom.DataAttribute</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


You can update a data attribute.

> 🚧 Updating the data type is not possible
>
> It is currently a dangerous action to execute changing a data attribute's type via the API. You will need to update the type via the UI instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.dataAttributes.updateDataAttribute({
    id: 1,
    body: {
        "key": "value"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.UpdateDataAttributeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataAttributesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Auth Tokens
<details><summary><code>client.preview.authTokens.<a href="/src/api/resources/preview/resources/authTokens/client/Client.ts">listAuthTokens</a>({ ...params }) -> Intercom.AuthTokenList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of the workspace's stored third-party credentials. Use this to discover the id of a credential you want a data connector to authenticate with — that id is not otherwise available over REST. Only metadata is returned; credential values are never exposed. The list is not exhaustive: credentials a teammate created are listed, as are those created by some Intercom integrations, but credentials installed by an app package, those created by most other integrations, and those minted for an individual teammate's MCP access are not.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.authTokens.listAuthTokens({
    per_page: 1,
    starting_after: "starting_after"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListAuthTokensRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthTokensClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.authTokens.<a href="/src/api/resources/preview/resources/authTokens/client/Client.ts">createAuthToken</a>({ ...params }) -> Intercom.AuthToken</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Stores a third-party credential in your workspace so a data connector can authenticate outbound requests with it. Only credentials with a `token_type` of `text` can be created here — the credential value is sent as a request header. The value you supply is stored encrypted and is never returned by any endpoint, including this one.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.authTokens.createAuthToken({
    name: "Fulfilment API key",
    token_value: "sk_live_9f3c2a7b41e8",
    request_header_key: "Authorization",
    token_prefix: "Bearer",
    description: "Used by the order status connector",
    domain: "api.fulfilment.example.com"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.CreateAuthTokenRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthTokensClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.authTokens.<a href="/src/api/resources/preview/resources/authTokens/client/Client.ts">retrieveAuthToken</a>({ ...params }) -> Intercom.AuthToken</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the metadata for a single stored third-party credential. A credential that the list endpoint does not return is also not retrievable here, and responds with 404.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.authTokens.retrieveAuthToken({
    id: "12345"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.RetrieveAuthTokenRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthTokensClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.authTokens.<a href="/src/api/resources/preview/resources/authTokens/client/Client.ts">updateAuthToken</a>({ ...params }) -> Intercom.AuthToken</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the metadata of a stored third-party credential. A field you omit keeps its current value. The credential value itself cannot be changed here and is never returned. Only credentials with a `token_type` of `text` can be updated; any other type responds with `400`. A credential the list endpoint does not return is also not updatable, and responds with `404`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.authTokens.updateAuthToken({
    id: "12345",
    name: "Fulfilment API key (rotated host)",
    description: "Used by the order status connector"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.UpdateAuthTokenRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthTokensClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Data Connectors
<details><summary><code>client.preview.dataConnectors.<a href="/src/api/resources/preview/resources/dataConnectors/client/Client.ts">listDataConnectors</a>({ ...params }) -> Intercom.DataConnectorList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of all data connectors for the workspace, ordered by most recently updated first. Data connectors allow workflows and AI agents to make HTTP requests to external APIs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.dataConnectors.listDataConnectors({
    per_page: 1,
    starting_after: "starting_after"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListDataConnectorsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataConnectorsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.dataConnectors.<a href="/src/api/resources/preview/resources/dataConnectors/client/Client.ts">createDataConnector</a>({ ...params }) -> Intercom.DataConnectorDetail</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new data connector. The connector is created in `draft` state. Configure its URL, headers, data inputs, and other settings, then set it to `live` when ready.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.dataConnectors.createDataConnector({
    name: "Get Order Status",
    description: "Looks up order status from an external service",
    http_method: "get",
    url: "https://api.example.com/orders/{{order_id}}/status",
    direct_fin_usage: true,
    audiences: ["leads", "visitors"],
    headers: [{
            name: "Content-Type",
            value: "application/json"
        }],
    data_inputs: [{
            name: "order_id",
            type: "string",
            description: "The order ID to look up",
            required: true,
            default_value: ""
        }],
    customer_authentication: true,
    bypass_authentication: false,
    validate_missing_attributes: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.CreateDataConnectorRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataConnectorsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.dataConnectors.<a href="/src/api/resources/preview/resources/dataConnectors/client/Client.ts">retrieveDataConnector</a>({ ...params }) -> Intercom.DataConnectorDetail</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can retrieve the full detail of a single data connector by its ID.

The response includes configuration, data inputs, response fields, and object mappings.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.dataConnectors.retrieveDataConnector({
    id: "12345",
    state_version: "draft"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.RetrieveDataConnectorRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataConnectorsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.dataConnectors.<a href="/src/api/resources/preview/resources/dataConnectors/client/Client.ts">deleteDataConnector</a>({ ...params }) -> Intercom.DeletedDataConnectorObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an existing data connector. The connector must be in `draft` state and must not be in use by any workflows or AI agents.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.dataConnectors.deleteDataConnector({
    id: "12345"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DeleteDataConnectorRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataConnectorsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.dataConnectors.<a href="/src/api/resources/preview/resources/dataConnectors/client/Client.ts">updateDataConnector</a>({ ...params }) -> Intercom.DataConnectorDetail</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an existing data connector. Only provided fields are changed. Set `state` to `live` or `draft` to change the connector's state.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.dataConnectors.updateDataConnector({
    id: "12345",
    name: "Updated Connector Name",
    description: "Updated description"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.UpdateDataConnectorRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataConnectorsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.dataConnectors.<a href="/src/api/resources/preview/resources/dataConnectors/client/Client.ts">listDataConnectorExecutionResults</a>({ ...params }) -> Intercom.DataConnectorExecutionResultList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve paginated execution logs for a specific data connector.
Results from the last hour are returned by default. Use `start_ts` and `end_ts` to customize the time range.

Request/response bodies are excluded by default. Use `include_bodies=true` to include them.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.dataConnectors.listDataConnectorExecutionResults({
    data_connector_id: "12345",
    per_page: 1,
    starting_after: "starting_after",
    success: "true",
    error_type: "request_configuration_error",
    start_ts: 1,
    end_ts: 1,
    include_bodies: "true"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListDataConnectorExecutionResultsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataConnectorsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.dataConnectors.<a href="/src/api/resources/preview/resources/dataConnectors/client/Client.ts">showDataConnectorExecutionResult</a>({ ...params }) -> Intercom.DataConnectorExecutionResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve details for a specific data connector execution result.
Always includes request/response bodies and the sanitised request URL.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.dataConnectors.showDataConnectorExecutionResult({
    data_connector_id: "12345",
    id: "99001"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ShowDataConnectorExecutionResultRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataConnectorsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ecommerce Connectors
<details><summary><code>client.preview.ecommerceConnectors.<a href="/src/api/resources/preview/resources/ecommerceConnectors/client/Client.ts">uploadEcommerceCatalog</a>({ ...params }) -> Intercom.EcommerceCatalogUploadPartResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Upload a product catalog to an ecommerce connector. The catalog must be a JSON
array of product objects. There are two upload modes:

**Single-file upload** — POST a single catalog file (up to 99 MB per request).
Omit `finalize` and `import_job_id`. Returns `202 Accepted` when sync has started.

**Multipart upload** — For catalogs that must be split across multiple requests:

1. POST the first part with `finalize=false` (no `import_job_id`). The response
   returns an `import_job_id` and `next_part_number`.
2. POST each subsequent part with `finalize=false`, the `import_job_id` from step 1,
   and the `part_number` from the previous response. Each part must be ≤ 99 MB.
3. POST with `finalize=true` and the `import_job_id` to complete the upload and
   start the sync. No catalog file is required in the finalization request.

Part uploads are idempotent — retrying the same `part_number` does not create
a duplicate. If a response is lost, retry with the same `part_number`.

## Product object structure

The catalog file must be a JSON array where each element is a product object.
Only `id`, `title`, and `url` are required — all other fields are optional.

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | string | ✓ | Your unique product identifier. Used to match products on re-upload so only changed products are re-indexed. Also the delete key — any product ID absent from a new upload is removed from Fin's knowledge. Must be stable across uploads. |
| `title` | string | ✓ | Product name. Used by Fin when searching for and recommending products. |
| `url` | string | ✓ | Canonical product page URL shown in Fin's product recommendations. Must be a valid `https://` URL. |
| `description` | string | | Product description that Fin reads to understand what the product is. HTML formatting is supported and safely sanitized (`description_html` takes precedence if both are provided). This is the primary field Fin uses to match products to shopper questions — a richer description leads to better recommendations. |
| `featured_image_url` | string | | Primary product image shown in Fin's recommendation cards. Falls back to the first entry of `image_urls` if not provided. If no valid image can be resolved for a variant, that variant's card is not shown to the shopper. |
| `image_urls` | string[] | | Additional product images. Used as a fallback when `featured_image_url` is absent or when a variant has no specific image. |
| `price_min` | number | | Lowest price across all variants. If omitted, derived automatically from variant prices. Fin uses this to filter products when a shopper mentions a budget (e.g. "under $100"). Displayed as a range alongside `price_max`, or as a single value if both are equal. |
| `price_max` | number | | Highest price across all variants. If omitted, derived from variant prices. Used alongside `price_min` for budget filtering and price display. |
| `currency` | string | | ISO 4217 currency code (e.g. `"USD"`, `"EUR"`, `"GBP"`). Defaults to USD if omitted. Used to format prices with the correct symbol in Fin's responses and product cards. |
| `in_stock` | boolean | | Whether the product is available to purchase. If omitted, derived from variant stock — the product is in stock if at least one variant has `in_stock: true`. Products with no in-stock variants are hidden from Fin entirely. |
| `category_path` | string or string[] | Strongly recommended | Hierarchical category breadcrumb (e.g. `["Clothing", "Outerwear", "Jackets"]`). Fin understands the hierarchy — a shopper asking about "Clothing" sees products from all subcategories underneath it. The most specific category is shown in search results. |
| `collections` | string[] | Strongly recommended | Collections or groupings this product belongs to in your store. Fin uses collections to understand your catalog's structure and answer questions like "what's in the sale collection?". |
| `tags` | string[] | | Free-form keywords matching how shoppers phrase needs in chat (e.g. `["waterproof", "gift", "plus-size"]`). Complements `category_path` and `collections`. |
| `available_options` | object[] | | Option types and their possible values (e.g. `{"name": "Size", "values": ["S", "M", "L"]}`). Fin uses these to understand what choices a shopper can make and to correctly filter variants when asked for a specific size, colour, or other attribute. |
| `additional_data` | object | | Custom attributes for your business. Fin uses these to show each customer only relevant products. All keys must be consistent across all products in your catalog — the attribute schema is read from the first product in the file. |
| `variants` | object[] | | Individual purchasable variants. Fin recommends specific variants (not just products), so populating variants with accurate stock, price, and option data leads to more precise recommendations. See the variant table below. |

### Variant object structure

Each object in the `variants` array may contain:

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | string | ✓ | Unique identifier for this variant within the product. |
| `title` | string | | Variant display name shown to shoppers (e.g. `"Small / Blue"`). |
| `price` | number | | Price of this specific variant. Fin uses variant prices for precise budget filtering and displays the variant price in recommendation cards. |
| `compare_at_price` | number | | Original price before a discount. When provided, Fin will naturally mention the saving (e.g. "down from $129 to $99"). |
| `in_stock` | boolean | | Whether this variant is currently available. Out-of-stock variants are not shown in Fin's recommendation cards and Fin will not suggest them to shoppers. |
| `image_url` | string | | Image specific to this variant. Takes precedence over the product's `featured_image_url`. Falls back to `featured_image_url`, then `image_urls`. If no valid image can be resolved, this variant's recommendation card will not be shown. |
| `selected_options` | object[] | | The specific option values that define this variant (e.g. `[{"name": "Size", "value": "Small"}, {"name": "Color", "value": "Blue"}]`). Fin uses these to match shopper requests like "do you have this in medium?" to the correct variant. |
| `url` | string | | Direct link to this variant's page. Takes precedence over the product URL in recommendation cards. If omitted, constructed automatically as `{product_url}?variant={id}`. |

### Example catalog file

```json
[
  {
    "id": "prod-12345",
    "title": "Classic Cotton T-Shirt",
    "url": "https://example.com/products/classic-cotton-t-shirt",
    "description": "A comfortable everyday t-shirt.",
    "featured_image_url": "https://cdn.example.com/images/t-shirt.jpg",
    "price_min": 19.99,
    "price_max": 29.99,
    "currency": "USD",
    "in_stock": true,
    "tags": ["organic", "bestseller"],
    "collections": ["Summer Collection"],
    "category_path": "Clothing > T-Shirts",
    "available_options": [
      {"name": "Size", "values": ["S", "M", "L"]},
      {"name": "Color", "values": ["White", "Blue"]}
    ],
    "variants": [
      {
        "id": "var-001",
        "title": "S / White",
        "price": 19.99,
        "in_stock": true,
        "selected_options": [
          {"name": "Size", "value": "S"},
          {"name": "Color", "value": "White"}
        ]
      },
      {
        "id": "var-002",
        "title": "M / Blue",
        "price": 29.99,
        "in_stock": true,
        "selected_options": [
          {"name": "Size", "value": "M"},
          {"name": "Color", "value": "Blue"}
        ]
      }
    ],
    "additional_data": {
      "sku": "TSHIRT-WHT-S",
      "vendor": "Acme Apparel"
    }
  }
]
```
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.ecommerceConnectors.uploadEcommerceCatalog({
    id: "42939"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.UploadEcommerceCatalogRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EcommerceConnectorsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Data Events
<details><summary><code>client.preview.dataEvents.<a href="/src/api/resources/preview/resources/dataEvents/client/Client.ts">lisDataEvents</a>({ ...params }) -> Intercom.DataEventSummary</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


> 🚧
>
> Please note that you can only 'list' events that are less than 90 days old. Event counts and summaries will still include your events older than 90 days but you cannot 'list' these events individually if they are older than 90 days

The events belonging to a customer can be listed by sending a GET request to `https://api.intercom.io/events` with a user or lead identifier along with a `type` parameter. The identifier parameter can be one of `user_id`, `email` or `intercom_user_id`. The `type` parameter value must be `user`.

- `https://api.intercom.io/events?type=user&user_id={user_id}`
- `https://api.intercom.io/events?type=user&email={email}`
- `https://api.intercom.io/events?type=user&intercom_user_id={id}` (this call can be used to list leads)

The `email` parameter value should be [url encoded](http://en.wikipedia.org/wiki/Percent-encoding) when sending.

You can optionally define the result page size as well with the `per_page` parameter.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.dataEvents.lisDataEvents({
    filter: {
        user_id: "user_id"
    },
    type: "type"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.LisDataEventsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataEventsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.dataEvents.<a href="/src/api/resources/preview/resources/dataEvents/client/Client.ts">createDataEvent</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


You will need an Access Token that has write permissions to send Events. Once you have a key you can submit events via POST to the Events resource, which is located at https://api.intercom.io/events, or you can send events using one of the client libraries. When working with the HTTP API directly a client should send the event with a `Content-Type` of `application/json`.

When using the JavaScript API, [adding the code to your app](http://docs.intercom.io/configuring-Intercom/tracking-user-events-in-your-app) makes the Events API available. Once added, you can submit an event using the `trackEvent` method. This will associate the event with the Lead or currently logged-in user or logged-out visitor/lead and send it to Intercom. The final parameter is a map that can be used to send optional metadata about the event.

With the Ruby client you pass a hash describing the event to `Intercom::Event.create`, or call the `track_user` method directly on the current user object (e.g. `user.track_event`).

**NB: For the JSON object types, please note that we do not currently support nested JSON structure.**

| Type            | Description                                                                                                                                                                                                     | Example                                                                           |
| :-------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------- |
| String          | The value is a JSON String                                                                                                                                                                                      | `"source":"desktop"`                                                              |
| Number          | The value is a JSON Number                                                                                                                                                                                      | `"load": 3.67`                                                                    |
| Date            | The key ends with the String `_date` and the value is a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time), assumed to be in the [UTC](http://en.wikipedia.org/wiki/Coordinated_Universal_Time) timezone. | `"contact_date": 1392036272`                                                      |
| Link            | The value is a HTTP or HTTPS URI.                                                                                                                                                                               | `"article": "https://example.org/ab1de.html"`                                     |
| Rich Link       | The value is a JSON object that contains `url` and `value` keys.                                                                                                                                                | `"article": {"url": "https://example.org/ab1de.html", "value":"the dude abides"}` |
| Monetary Amount | The value is a JSON object that contains `amount` and `currency` keys. The `amount` key is a positive integer representing the amount in cents. The price in the example to the right denotes €349.99.          | `"price": {"amount": 34999, "currency": "eur"}`                                   |

**Lead Events**

When submitting events for Leads, you will need to specify the Lead's `id`.

**Metadata behaviour**

- We currently limit the number of tracked metadata keys to 10 per event. Once the quota is reached, we ignore any further keys we receive. The first 10 metadata keys are determined by the order in which they are sent in with the event.
- It is not possible to change the metadata keys once the event has been sent. A new event will need to be created with the new keys and you can archive the old one.
- There might be up to 24 hrs delay when you send a new metadata for an existing event.

**Event de-duplication**

The API may detect and ignore duplicate events. Each event is uniquely identified as a combination of the following data - the Workspace identifier, the Contact external identifier, the Data Event name and the Data Event created time. As a result, it is **strongly recommended** to send a second granularity Unix timestamp in the `created_at` field.

Duplicated events are responded to using the normal `202 Accepted` code - an error is not thrown, however repeat requests will be counted against any rate limit that is in place.

### HTTP API Responses

- Successful responses to submitted events return `202 Accepted` with an empty body.
- Unauthorised access will be rejected with a `401 Unauthorized` or `403 Forbidden` response code.
- Events sent about users that cannot be found will return a `404 Not Found`.
- Event lists containing duplicate events will have those duplicates ignored.
- Server errors will return a `500` response code and may contain an error message in the body.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.dataEvents.createDataEvent({
    "key": "value"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateDataEventRequestTwo` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataEventsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.dataEvents.<a href="/src/api/resources/preview/resources/dataEvents/client/Client.ts">dataEventSummaries</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create event summaries for a user. Event summaries are used to track the number of times an event has occurred, the first time it occurred and the last time it occurred.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.dataEvents.dataEventSummaries();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.CreateDataEventSummariesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataEventsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Data Export
<details><summary><code>client.preview.dataExport.<a href="/src/api/resources/preview/resources/dataExport/client/Client.ts">createDataExport</a>({ ...params }) -> Intercom.DataExport</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

To create your export job, you need to send a `POST` request to the export endpoint `https://api.intercom.io/export/content/data`.

This endpoint exports **message delivery and engagement data** for outbound content (Emails, Posts, Custom Bots, Surveys, Tours, Series, and more). The exported data includes who received each message, when they received it, and how they engaged with it (opens, clicks, replies, completions, dismissals, unsubscribes, and bounces). It does not export raw message or conversation content.

The only parameters you need to provide are the range of dates that you want exported.

>🚧 Limit of one active job
>
> You can only have one active job per workspace. You will receive a HTTP status code of 429 with the message Exceeded rate limit of 1 pending message data export jobs if you attempt to create a second concurrent job.

>❗️ Updated_at not included
>
> It should be noted that the timeframe only includes messages sent during the time period and not messages that were only updated during this period. For example, if a message was updated yesterday but sent two days ago, you would need to set the created_at_after date before the message was sent to include that in your retrieval job.

>📘 Date ranges are inclusive
>
> Requesting data for 2018-06-01 until 2018-06-30 will get all data for those days including those specified - e.g. 2018-06-01 00:00:00 until 2018-06-30 23:59:99.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.dataExport.createDataExport({
    created_at_after: 1734519776,
    created_at_before: 1734537776
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.CreateDataExportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.dataExport.<a href="/src/api/resources/preview/resources/dataExport/client/Client.ts">getDataExport</a>({ ...params }) -> Intercom.DataExport</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can view the status of your job by sending a `GET` request to the URL
`https://api.intercom.io/export/content/data/{job_identifier}` - the `{job_identifier}` is the value returned in the response when you first created the export job. More on it can be seen in the Export Job Model.

> 🚧 Jobs expire after two days
> All jobs that have completed processing (and are thus available to download from the provided URL) will have an expiry limit of two days from when the export ob completed. After this, the data will no longer be available.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.dataExport.getDataExport({
    job_identifier: "job_identifier"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.GetDataExportRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.dataExport.<a href="/src/api/resources/preview/resources/dataExport/client/Client.ts">cancelDataExport</a>({ ...params }) -> Intercom.DataExport</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can cancel your job
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.dataExport.cancelDataExport({
    job_identifier: "job_identifier"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.CancelDataExportRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.dataExport.<a href="/src/api/resources/preview/resources/dataExport/client/Client.ts">downloadDataExport</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

When a job has a status of complete, and thus a filled download_url, you can download your data by hitting that provided URL, formatted like so: https://api.intercom.io/download/content/data/xyz1234.

Your exported message data will be streamed continuously back down to you in a gzipped CSV format.

> 📘 Octet header required
>
> You will have to specify the header Accept: `application/octet-stream` when hitting this endpoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.dataExport.downloadDataExport({
    job_identifier: "job_identifier"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DownloadDataExportRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Workflows
<details><summary><code>client.preview.workflows.<a href="/src/api/resources/preview/resources/workflows/client/Client.ts">exportWorkflow</a>({ ...params }) -> Intercom.WorkflowExport</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export a workflow configuration by its ID. This endpoint returns the complete workflow definition including its steps, targeting rules, and attributes.

This endpoint is designed for EU Data Act compliance, allowing customers to export their workflow configurations.

{% admonition type="info" name="Preview API" %}
  This endpoint is available in the Preview API version. We may make iterative improvements, including adding new fields or refining existing ones.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.workflows.exportWorkflow({
    id: "12345"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ExportWorkflowRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WorkflowsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Jobs
<details><summary><code>client.preview.jobs.<a href="/src/api/resources/preview/resources/jobs/client/Client.ts">status</a>({ ...params }) -> Intercom.Jobs</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the status of job execution.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.jobs.status({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.JobsStatusRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Macros
<details><summary><code>client.preview.macros.<a href="/src/api/resources/preview/resources/macros/client/Client.ts">listMacros</a>({ ...params }) -> Intercom.MacroList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all macros (saved replies) in your workspace for use in automating responses.

The macros are returned in descending order by updated_at.

**Pagination**

This endpoint uses cursor-based pagination via the `starting_after` parameter. The cursor is a Base64-encoded JSON array containing `[updated_at, id]` of the last item from the previous page.

**Placeholder Transformation**

The API transforms Intercom placeholders to a more standard XML-like format:
- From: `{{user.name | fallback: 'there'}}`
- To: `<attribute key="user.name" default="there"/>`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.macros.listMacros({
    per_page: 1,
    starting_after: "WzE3MTk0OTM3NTcuMCwgIjEyMyJd",
    updated_since: 1000000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListMacrosRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MacrosClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.macros.<a href="/src/api/resources/preview/resources/macros/client/Client.ts">getMacro</a>({ ...params }) -> Intercom.Macro | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a single macro (saved reply) by its ID. The macro will only be returned if it is visible to the authenticated user based on its visibility settings.

**Visibility Rules**

A macro is returned based on its `visible_to` setting:
- `everyone`: Always visible to all team members
- `specific_teams`: Only visible if the authenticated user belongs to one of the teams specified in `visible_to_team_ids`

If a macro exists but is not visible to the authenticated user, a 404 error is returned.

**Placeholder Transformation**

The API transforms Intercom placeholders to a more standard XML-like format in the `body` field:
- From: `{{user.name | fallback: 'there'}}`
- To: `<attribute key="user.name" default="there"/>`

Default values in placeholders are HTML-escaped for security.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.macros.getMacro({
    id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.GetMacroRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MacrosClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Messages
<details><summary><code>client.preview.messages.<a href="/src/api/resources/preview/resources/messages/client/Client.ts">createMessage</a>({ ...params }) -> Intercom.Message</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a message that has been initiated by an admin. The conversation can be either an in-app message, an email, sms or whatsapp.

> 🚧 Sending for visitors
>
> There can be a short delay between when a contact is created and when a contact becomes available to be messaged through the API. A 404 Not Found error will be returned in this case.

This will return the Message model that has been created.

> 🚧 Retrieving Associated Conversations
>
> As this is a message, there will be no conversation present until the contact responds. Once they do, you will have to search for a contact's conversations with the id of the message.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.messages.createMessage({
    "from": {
        "type": "user",
        "id": "6762f2341bb69f9f2193bc17"
    },
    "body": "heyy",
    "referer": "https://twitter.com/bob"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateMessageRequest | undefined` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MessagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.messages.<a href="/src/api/resources/preview/resources/messages/client/Client.ts">getWhatsAppMessageStatus</a>({ ...params }) -> Intercom.WhatsappMessageStatusList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves statuses of messages sent from the Outbound module. Currently, this API only supports WhatsApp messages.


This endpoint returns paginated status events for WhatsApp messages sent via the Outbound module, providing
information about delivery state and related message details.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.messages.getWhatsAppMessageStatus({
    ruleset_id: "ruleset_id",
    per_page: 1,
    starting_after: "starting_after"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.GetWhatsAppMessageStatusRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MessagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.messages.<a href="/src/api/resources/preview/resources/messages/client/Client.ts">retrieveWhatsAppMessageStatus</a>({ ...params }) -> Intercom.WhatsappMessageStatus</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the delivery status of a specific WhatsApp message by its message ID.


Returns the current status, conversation details, and any error information if the message failed to deliver.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.messages.retrieveWhatsAppMessageStatus({
    message_id: "message_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.RetrieveWhatsAppMessageStatusRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MessagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Teams
<details><summary><code>client.preview.teams.<a href="/src/api/resources/preview/resources/teams/client/Client.ts">getTeamMetrics</a>({ ...params }) -> Intercom.TeamMetricList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns real-time activity metrics for admins in the specified team. For each admin, the response includes counts of open, idle, and snoozed conversations.

This endpoint requires the `realtime_monitoring` feature to be enabled for your workspace.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.teams.getTeamMetrics({
    team_id: "42",
    idle_threshold: 1800
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.GetTeamMetricsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.teams.<a href="/src/api/resources/preview/resources/teams/client/Client.ts">listTeams</a>() -> Intercom.TeamList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This will return a list of team objects for the App.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.teams.listTeams();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `TeamsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.teams.<a href="/src/api/resources/preview/resources/teams/client/Client.ts">retrieveTeam</a>({ ...params }) -> Intercom.Team</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single team, containing an array of admins that belong to this team.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.teams.retrieveTeam({
    id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.RetrieveTeamRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.teams.<a href="/src/api/resources/preview/resources/teams/client/Client.ts">updateTeamMembers</a>({ ...params }) -> Intercom.Team</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can replace the set of teammates who belong to a team. Send the full list of
teammates the team should end up with — any teammate currently on the team and
missing from the list is removed. This makes the endpoint safe to call on a
schedule to keep Intercom in step with an external rota or workforce management
system, since sending an unchanged list makes no changes at all.

A token that acts on behalf of a teammate carries that teammate's permissions:
they must be able to manage teams, and any team or teammate their access is
restricted from remains out of reach here.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.teams.updateTeamMembers({
    id: "123",
    admin_ids: [493881, 493882],
    admin_priority_level: {
        primary_admin_ids: [493881],
        secondary_admin_ids: [493882]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.UpdateTeamMembersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## News
<details><summary><code>client.preview.news.<a href="/src/api/resources/preview/resources/news/client/Client.ts">listNewsItems</a>() -> Intercom.PaginatedResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all news items
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.news.listNewsItems();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `NewsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.news.<a href="/src/api/resources/preview/resources/news/client/Client.ts">createNewsItem</a>({ ...params }) -> Intercom.NewsItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a news item
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.news.createNewsItem({
    title: "Halloween is here!",
    body: "<p>New costumes in store for this spooky season</p>",
    sender_id: 991267834,
    state: "live",
    deliver_silently: true,
    labels: ["Product", "Update", "New"],
    reactions: ["\uD83D\uDE06", "\uD83D\uDE05"],
    newsfeed_assignments: [{
            newsfeed_id: 53,
            published_at: 1664638214
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.NewsItemRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NewsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.news.<a href="/src/api/resources/preview/resources/news/client/Client.ts">retrieveNewsItem</a>({ ...params }) -> Intercom.NewsItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single news item.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.news.retrieveNewsItem({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.RetrieveNewsItemRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NewsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.news.<a href="/src/api/resources/preview/resources/news/client/Client.ts">updateNewsItem</a>({ ...params }) -> Intercom.NewsItem</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.news.updateNewsItem({
    id: 1,
    body: {
        title: "Christmas is here!",
        body: "<p>New gifts in store for the jolly season</p>",
        sender_id: 991267845,
        reactions: ["\uD83D\uDE1D", "\uD83D\uDE02"]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.UpdateNewsItemRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NewsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.news.<a href="/src/api/resources/preview/resources/news/client/Client.ts">deleteNewsItem</a>({ ...params }) -> Intercom.DeletedObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a single news item.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.news.deleteNewsItem({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DeleteNewsItemRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NewsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.news.<a href="/src/api/resources/preview/resources/news/client/Client.ts">listLiveNewsfeedItems</a>({ ...params }) -> Intercom.PaginatedResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all news items that are live on a given newsfeed
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.news.listLiveNewsfeedItems({
    id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListLiveNewsfeedItemsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NewsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.news.<a href="/src/api/resources/preview/resources/news/client/Client.ts">listNewsfeeds</a>() -> Intercom.PaginatedResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all newsfeeds
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.news.listNewsfeeds();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `NewsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.news.<a href="/src/api/resources/preview/resources/news/client/Client.ts">retrieveNewsfeed</a>({ ...params }) -> Intercom.Newsfeed</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single newsfeed
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.news.retrieveNewsfeed({
    id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.RetrieveNewsfeedRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NewsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Roles
<details><summary><code>client.preview.roles.<a href="/src/api/resources/preview/resources/roles/client/Client.ts">listRoles</a>() -> Intercom.RoleList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all roles in the workspace.

Roles define what a teammate can do in a workspace. The teammates endpoint
returns the role a teammate holds, but only the roles that are currently
assigned, and only their id and name. This endpoint lists every role in the
workspace, each with its description.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.roles.listRoles();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `RolesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.roles.<a href="/src/api/resources/preview/resources/roles/client/Client.ts">retrieveRole</a>({ ...params }) -> Intercom.Role</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single role by its id, including its
description, which the teammates endpoint does not return.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.roles.retrieveRole({
    id: "991267902"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.RetrieveRoleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RolesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Identity Verification Secrets
<details><summary><code>client.preview.identityVerificationSecrets.<a href="/src/api/resources/preview/resources/identityVerificationSecrets/client/Client.ts">listIdentityVerificationSecrets</a>() -> Intercom.IdentityVerificationSecretList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the identity verification secrets configured for your workspace.

Each entry includes metadata only — the HMAC signing material itself is **never** returned by this endpoint. The raw secret is only available once, in the response to `POST /secure_mode_secrets`. Persist it at that moment.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.identityVerificationSecrets.listIdentityVerificationSecrets();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `IdentityVerificationSecretsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.identityVerificationSecrets.<a href="/src/api/resources/preview/resources/identityVerificationSecrets/client/Client.ts">createIdentityVerificationSecret</a>({ ...params }) -> Intercom.IdentityVerificationSecretWithMaterial</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new identity verification secret for your workspace. Intercom generates a 256-bit, cryptographically random value server-side and returns it once in the response.

**This is the only opportunity to capture the secret.** Store it in your secure configuration immediately. The `secret` field is omitted from all subsequent responses (including `GET /secure_mode_secrets`) — if you lose it, you must rotate a new secret in and delete this one.

You must enable the secret for at least one platform (`supports_android`, `supports_ios`, or `supports_web`). Rotation flow: create the new secret, roll it out to every client signing `user_hash` values, then delete the old secret with `DELETE /secure_mode_secrets/{id}` once traffic has cut over.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.identityVerificationSecrets.createIdentityVerificationSecret({
    name: "Production Web",
    supports_web: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.CreateIdentityVerificationSecretRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IdentityVerificationSecretsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.identityVerificationSecrets.<a href="/src/api/resources/preview/resources/identityVerificationSecrets/client/Client.ts">deleteIdentityVerificationSecret</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Soft-deletes an identity verification secret. After deletion, any `user_hash` values signed with that secret will no longer verify — Messenger sessions depending on it will be rejected on their next request. Use this to complete a rotation: create a new secret, roll it out, then delete the old one.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.identityVerificationSecrets.deleteIdentityVerificationSecret({
    id: "102"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DeleteIdentityVerificationSecretRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IdentityVerificationSecretsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Segments
<details><summary><code>client.preview.segments.<a href="/src/api/resources/preview/resources/segments/client/Client.ts">listSegments</a>({ ...params }) -> Intercom.SegmentList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all segments.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.segments.listSegments({
    include_count: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListSegmentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SegmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.segments.<a href="/src/api/resources/preview/resources/segments/client/Client.ts">retrieveSegment</a>({ ...params }) -> Intercom.Segment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single segment.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.segments.retrieveSegment({
    id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.RetrieveSegmentRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SegmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Switch
<details><summary><code>client.preview.switch.<a href="/src/api/resources/preview/resources/switch/client/Client.ts">createPhoneSwitch</a>({ ...params }) -> Intercom.PhoneSwitch | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can use the API to deflect phone calls to the Intercom Messenger.
Calling this endpoint will send an SMS with a link to the Messenger to the phone number specified.

If custom attributes are specified, they will be added to the user or lead's custom data attributes.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.switch.createPhoneSwitch({
    "key": "value"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `unknown` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SwitchClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Calls
<details><summary><code>client.preview.calls.<a href="/src/api/resources/preview/resources/calls/client/Client.ts">listCalls</a>({ ...params }) -> Intercom.CallList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a paginated list of calls.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.calls.listCalls({
    page: 1,
    per_page: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListCallsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.calls.<a href="/src/api/resources/preview/resources/calls/client/Client.ts">showCall</a>({ ...params }) -> Intercom.Call</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a single call by id.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.calls.showCall({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ShowCallRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.calls.<a href="/src/api/resources/preview/resources/calls/client/Client.ts">showCallRecording</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Redirects to a signed URL for the call's recording if it exists.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.calls.showCallRecording({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ShowCallRecordingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.calls.<a href="/src/api/resources/preview/resources/calls/client/Client.ts">showCallTranscript</a>({ ...params }) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the transcript for the specified call as a downloadable text file.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.calls.showCallTranscript({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ShowCallTranscriptRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.calls.<a href="/src/api/resources/preview/resources/calls/client/Client.ts">listCallsWithTranscripts</a>({ ...params }) -> Intercom.ListCallsWithTranscriptsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve calls by a list of conversation ids and include transcripts when available.
A maximum of 20 `conversation_ids` can be provided. If none are provided or more than 20 are provided, a 400 error is returned.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.calls.listCallsWithTranscripts({
    conversation_ids: ["64619700005694", "64619700005695"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListCallsWithTranscriptsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.calls.<a href="/src/api/resources/preview/resources/calls/client/Client.ts">registerFinVoiceCall</a>({ ...params }) -> Intercom.AiCallResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Register a Fin Voice call with Intercom. This endpoint creates an external reference
that links an external call identifier to an Intercom call and conversation.

The call can be from different sources:
- AWS Connect (default)
- Five9
- Zoom Phone
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.calls.registerFinVoiceCall({
    phone_number: "+1234567890",
    call_id: "call-123-abc"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.RegisterFinVoiceCallRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.calls.<a href="/src/api/resources/preview/resources/calls/client/Client.ts">collectFinVoiceCallById</a>({ ...params }) -> Intercom.AiCallResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve information about a Fin Voice call using the external reference ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.calls.collectFinVoiceCallById({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.CollectFinVoiceCallByIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.calls.<a href="/src/api/resources/preview/resources/calls/client/Client.ts">collectFinVoiceCallByExternalId</a>({ ...params }) -> Intercom.AiCallResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve information about a Fin Voice call using the external call identifier.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.calls.collectFinVoiceCallByExternalId({
    external_id: "external_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.CollectFinVoiceCallByExternalIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.calls.<a href="/src/api/resources/preview/resources/calls/client/Client.ts">collectFinVoiceCallByPhoneNumber</a>({ ...params }) -> Intercom.Error_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve information about a Fin Voice call using the phone number.

Returns the most recent matched call for the given phone number, ordered by creation date.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.calls.collectFinVoiceCallByPhoneNumber({
    phone_number: "phone_number"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.CollectFinVoiceCallByPhoneNumberRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.calls.<a href="/src/api/resources/preview/resources/calls/client/Client.ts">collectFinVoiceCallsByConversationId</a>({ ...params }) -> Intercom.AiCallResponse[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve information about Fin Voice calls associated with a conversation.

Returns all matched calls for the given conversation ID. A conversation may have multiple associated calls.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.calls.collectFinVoiceCallsByConversationId({
    conversation_id: "conversation_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.CollectFinVoiceCallsByConversationIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticket States
<details><summary><code>client.preview.ticketStates.<a href="/src/api/resources/preview/resources/ticketStates/client/Client.ts">listTicketStates</a>() -> Intercom.TicketStateList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can get a list of all ticket states for a workspace.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.ticketStates.listTicketStates();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `TicketStatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticket Type Attributes
<details><summary><code>client.preview.ticketTypeAttributes.<a href="/src/api/resources/preview/resources/ticketTypeAttributes/client/Client.ts">createTicketTypeAttribute</a>({ ...params }) -> Intercom.TicketTypeAttribute | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new attribute for a ticket type.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.ticketTypeAttributes.createTicketTypeAttribute({
    ticket_type_id: "ticket_type_id",
    name: "Attribute Title",
    description: "Attribute Description",
    data_type: "string",
    required_to_create: false
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.CreateTicketTypeAttributeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketTypeAttributesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.ticketTypeAttributes.<a href="/src/api/resources/preview/resources/ticketTypeAttributes/client/Client.ts">updateTicketTypeAttribute</a>({ ...params }) -> Intercom.TicketTypeAttribute | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update an existing attribute for a ticket type.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.ticketTypeAttributes.updateTicketTypeAttribute({
    ticket_type_id: "ticket_type_id",
    id: "id",
    description: "New Attribute Description"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.UpdateTicketTypeAttributeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketTypeAttributesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticket Types
<details><summary><code>client.preview.ticketTypes.<a href="/src/api/resources/preview/resources/ticketTypes/client/Client.ts">listTicketTypes</a>() -> Intercom.TicketTypeList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can get a list of all ticket types for a workspace.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.ticketTypes.listTicketTypes();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `TicketTypesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.ticketTypes.<a href="/src/api/resources/preview/resources/ticketTypes/client/Client.ts">createTicketType</a>({ ...params }) -> Intercom.TicketType | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new ticket type.
> 📘 Creating ticket types.
>
> Every ticket type will be created with two default attributes: _default_title_ and _default_description_.
> For the `icon` propery, use an emoji from [Twemoji Cheatsheet](https://twemoji-cheatsheet.vercel.app/)
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.ticketTypes.createTicketType({
    "key": "value"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `unknown` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketTypesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.ticketTypes.<a href="/src/api/resources/preview/resources/ticketTypes/client/Client.ts">getTicketType</a>({ ...params }) -> Intercom.TicketType | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single ticket type.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.ticketTypes.getTicketType({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.GetTicketTypeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketTypesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Tickets
<details><summary><code>client.preview.tickets.<a href="/src/api/resources/preview/resources/tickets/client/Client.ts">replyTicket</a>({ ...params }) -> Intercom.TicketReply</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can reply to a ticket with a message from an admin or on behalf of a contact, or with a note for admins.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.tickets.replyTicket({
    id: "123",
    body: {
        message_type: "comment",
        type: "user",
        body: "Thanks again :)",
        intercom_user_id: "6762f2971bb69f9f2193bc49"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ReplyTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.tickets.<a href="/src/api/resources/preview/resources/tickets/client/Client.ts">linkConversationToTicket</a>({ ...params }) -> Intercom.Conversation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Link a conversation to an existing tracker ticket. The conversation can be
a regular conversation or one that has been converted into a customer ticket.

Use this when related conversations surface after a tracker ticket has
already been created. The ticket in the path must be a tracker ticket, and
`conversation_id` in the body is the conversation (or customer ticket) to
link to it. This returns the linked conversation.

A tracker ticket can have up to 2,500 linked conversations; once that
limit is reached, further requests return `linked_conversation_limit_exceeded`.

Requires the `write_tickets` OAuth scope.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.tickets.linkConversationToTicket({
    ticket_id: "64619700005694",
    conversation_id: "204"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.LinkConversationToTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.tickets.<a href="/src/api/resources/preview/resources/tickets/client/Client.ts">unlinkConversationFromTicket</a>({ ...params }) -> Intercom.Conversation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Unlink a conversation (or converted customer ticket) from a tracker ticket
it is currently linked to. The ticket in the path must be a tracker ticket.
This returns the conversation that was unlinked.

Requires the `write_tickets` OAuth scope.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.tickets.unlinkConversationFromTicket({
    ticket_id: "64619700005694",
    id: "204"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.UnlinkConversationFromTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.tickets.<a href="/src/api/resources/preview/resources/tickets/client/Client.ts">enqueueCreateTicket</a>({ ...params }) -> Intercom.Jobs</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Enqueues ticket creation for asynchronous processing, returning if the job was enqueued successfully to be processed. We attempt to perform a best-effort validation on inputs before tasks are enqueued. If the given parameters are incorrect, we won't enqueue the job.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.tickets.enqueueCreateTicket({
    ticket_type_id: "1234",
    contacts: [{
            id: "6762f2d81bb69f9f2193bc54"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.EnqueueCreateTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.tickets.<a href="/src/api/resources/preview/resources/tickets/client/Client.ts">getTicket</a>({ ...params }) -> Intercom.Ticket | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single ticket.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.tickets.getTicket({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.GetTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.tickets.<a href="/src/api/resources/preview/resources/tickets/client/Client.ts">updateTicket</a>({ ...params }) -> Intercom.Ticket | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update a ticket.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.tickets.updateTicket({
    id: "id",
    ticket_attributes: {
        "_default_title_": "example",
        "_default_description_": "there is a problem"
    },
    ticket_state_id: "123",
    open: true,
    snoozed_until: 1673609604,
    admin_id: 991268011,
    assignee_id: "123",
    priority: "high"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.UpdateTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.tickets.<a href="/src/api/resources/preview/resources/tickets/client/Client.ts">deleteTicket</a>({ ...params }) -> Intercom.TicketDeleted</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

{% admonition type="warning" name="Irreversible operation" %}
Deleting a ticket is permanent and cannot be reversed.
{% /admonition %}

Deleting a ticket permanently removes it from the inbox. All sensitive data is deleted, including admin and user replies, ticket attributes, uploads, and related content. The ticket will still appear in reporting, though some data may be incomplete due to the deletion.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.tickets.deleteTicket({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.DeleteTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.tickets.<a href="/src/api/resources/preview/resources/tickets/client/Client.ts">changeTicketType</a>({ ...params }) -> Intercom.Ticket | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can change the type of a ticket. The new ticket type must be in the same category as the current type. Attributes matching by name and type are automatically transferred from the old type; values provided in ticket_attributes override transferred values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.tickets.changeTicketType({
    ticket_id: "ticket_id",
    ticket_type_id: "1234",
    ticket_state_id: "5678"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ChangeTicketTypeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.tickets.<a href="/src/api/resources/preview/resources/tickets/client/Client.ts">searchTickets</a>({ ...params }) -> Intercom.TicketList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can search for multiple tickets by the value of their attributes in order to fetch exactly which ones you want.

To search for tickets, you send a `POST` request to `https://api.intercom.io/tickets/search`.

This will accept a query object in the body which will define your filters.
{% admonition type="warning" name="Optimizing search queries" %}
  Search queries can be complex, so optimizing them can help the performance of your search.
  Use the `AND` and `OR` operators to combine multiple filters to get the exact results you need and utilize
  pagination to limit the number of results returned. The default is `20` results per page.
  See the [pagination section](https://developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/pagination/#example-search-conversations-request) for more details on how to use the `starting_after` param.
{% /admonition %}

### Nesting & Limitations

You can nest these filters in order to get even more granular insights that pinpoint exactly what you need. Example: (1 OR 2) AND (3 OR 4).
There are some limitations to the amount of multiples there can be:
- There's a limit of max 2 nested filters
- There's a limit of max 15 filters for each AND or OR group

### Accepted Fields

Most keys listed as part of the Ticket model are searchable, whether writeable or not. The value you search for has to match the accepted type, otherwise the query will fail (ie. as `created_at` accepts a date, the `value` cannot be a string such as `"foobar"`).
The `source.body` field is unique as the search will not be performed against the entire value, but instead against every element of the value separately. For example, when searching for a conversation with a `"I need support"` body - the query should contain a `=` operator with the value `"support"` for such conversation to be returned. A query with a `=` operator and a `"need support"` value will not yield a result.

| Field                                     | Type                                                                                     |
| :---------------------------------------- | :--------------------------------------------------------------------------------------- |
| id                                        | String                                                                                   |
| created_at                                | Date (UNIX timestamp)                                                                    |
| updated_at                                | Date (UNIX timestamp)                                                                    |
| title                           | String                                                                                   |
| description                     | String                                                                                   |
| category                                  | String                                                                                   |
| ticket_type_id                            | String                                                                                   |
| contact_ids                               | String                                                                                   |
| teammate_ids                              | String                                                                                   |
| admin_assignee_id                         | Integer                                                                                  |
| team_assignee_id                          | Integer                                                                                  |
| open                                      | Boolean                                                                                  |
| state                                     | String                                                                                   |
| snoozed_until                             | Date (UNIX timestamp)                                                                    |
| ticket_attribute.{id}                     | String or Boolean or Date (UNIX timestamp) or Float or Integer                           |

{% admonition type="info" name="Searching by Category" %}
When searching for tickets by the **`category`** field, specific terms must be used instead of the category names:
* For **Customer** category tickets, use the term `request`.
* For **Back-office** category tickets, use the term `task`.
* For **Tracker** category tickets, use the term `tracker`.
{% /admonition %}

### Accepted Operators

{% admonition type="info" name="Searching based on `created_at`" %}
  You may use the `<=` or `>=` operators to search by `created_at`.
{% /admonition %}

The table below shows the operators you can use to define how you want to search for the value.  The operator should be put in as a string (`"="`). The operator has to be compatible with the field's type  (eg. you cannot search with `>` for a given string value as it's only compatible for integer's and dates).

| Operator | Valid Types                    | Description                                                  |
| :------- | :----------------------------- | :----------------------------------------------------------- |
| =        | All                            | Equals                                                       |
| !=       | All                            | Doesn't Equal                                                |
| IN       | All                            | In  Shortcut for `OR` queries  Values most be in Array       |
| NIN      | All                            | Not In  Shortcut for `OR !` queries  Values must be in Array |
| >        | Integer  Date (UNIX Timestamp) | Greater (or equal) than                                      |
| <       | Integer  Date (UNIX Timestamp) | Lower (or equal) than                                        |
| ~        | String                         | Contains                                                     |
| !~       | String                         | Doesn't Contain                                              |
| ^        | String                         | Starts With                                                  |
| $        | String                         | Ends With                                                    |
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.tickets.searchTickets({
    query: {
        operator: "AND",
        value: [{
                field: "created_at",
                operator: ">",
                value: "1306054154"
            }]
    },
    pagination: {
        per_page: 5
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.SearchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Visitors
<details><summary><code>client.preview.visitors.<a href="/src/api/resources/preview/resources/visitors/client/Client.ts">retrieveVisitorWithUserId</a>({ ...params }) -> Intercom.Visitor | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single visitor.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.visitors.retrieveVisitorWithUserId({
    user_id: "user_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.RetrieveVisitorWithUserIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VisitorsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.visitors.<a href="/src/api/resources/preview/resources/visitors/client/Client.ts">updateVisitor</a>({ ...params }) -> Intercom.Visitor | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sending a PUT request to `/visitors` will result in an update of an existing Visitor.

**Option 1.** You can update a visitor by passing in the `user_id` of the visitor in the Request body.

**Option 2.** You can update a visitor by passing in the `id` of the visitor in the Request body.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.visitors.updateVisitor({
    "id": "6762f30c1bb69f9f2193bc5e",
    "name": "Gareth Bale"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.UpdateVisitorRequestOne` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VisitorsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.visitors.<a href="/src/api/resources/preview/resources/visitors/client/Client.ts">convertVisitor</a>({ ...params }) -> Intercom.Contact</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can merge a Visitor to a Contact of role type `lead` or `user`.

> 📘 What happens upon a visitor being converted?
>
> If the User exists, then the Visitor will be merged into it, the Visitor deleted and the User returned. If the User does not exist, the Visitor will be converted to a User, with the User identifiers replacing it's Visitor identifiers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.visitors.convertVisitor({
    type: "user",
    user: {
        "email": "foo@bar.com"
    },
    visitor: {
        "user_id": "3ecf64d0-9ed1-4e9f-88e1-da7d6e6782f3"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ConvertVisitorRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VisitorsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Brands
<details><summary><code>client.preview.brands.<a href="/src/api/resources/preview/resources/brands/client/Client.ts">listBrands</a>() -> Intercom.BrandList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves all brands for the workspace, including the default brand.
The default brand id always matches the workspace
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.brands.listBrands();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `BrandsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.brands.<a href="/src/api/resources/preview/resources/brands/client/Client.ts">retrieveBrand</a>({ ...params }) -> Intercom.Brand</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches a specific brand by its unique identifier
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.brands.retrieveBrand({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.RetrieveBrandRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BrandsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Emails
<details><summary><code>client.preview.emails.<a href="/src/api/resources/preview/resources/emails/client/Client.ts">listEmails</a>() -> Intercom.EmailList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists all sender email address settings for the workspace
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.emails.listEmails();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `EmailsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.emails.<a href="/src/api/resources/preview/resources/emails/client/Client.ts">retrieveEmail</a>({ ...params }) -> Intercom.EmailSetting</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches a specific email setting by its unique identifier
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.emails.retrieveEmail({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.RetrieveEmailRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmailsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Fin Agent
<details><summary><code>client.preview.finAgent.<a href="/src/api/resources/preview/resources/finAgent/client/Client.ts">listFinCapabilities</a>({ ...params }) -> Intercom.ListFinCapabilitiesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Return a machine-readable, per-user list of what Fin can do for a given end user, so an
orchestrating agent can decide which endpoint to call.

The response is audience-matched to the supplied user: each live, API-triggerable
procedure is checked against that user before being included, alongside the static
`reply` and `ask` actions.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.finAgent.listFinCapabilities({
    user: {
        id: "123456"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ListFinCapabilitiesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FinAgentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.finAgent.<a href="/src/api/resources/preview/resources/finAgent/client/Client.ts">askFin</a>({ ...params }) -> Intercom.AskFinResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Ask Fin a single, self-contained question and receive one informational answer.

Unlike a conversation, `/fin/ask` is non-conversational: Fin will not ask follow-up
questions, will not run procedures, and will not escalate to a human on its own. You can
still escalate one yourself with `POST /fin/escalate`; the ask conversation is already
closed after its one-shot answer, and escalation leaves it closed while routing the
handoff separately.

Fin's answer is delivered asynchronously via the `fin_replied` event. The conversation
ends with a `complete` status — there is no `awaiting_user_reply` cycle.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.finAgent.askFin({
    conversation_id: "ext-123",
    message: {
        author: "user",
        body: "How do I reset my password?",
        timestamp: "2025-01-24T10:01:20Z"
    },
    user: {
        id: "123456",
        name: "John Doe",
        email: "john.doe@example.com"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.AskFinRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FinAgentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.finAgent.<a href="/src/api/resources/preview/resources/finAgent/client/Client.ts">replyToFin</a>({ ...params }) -> Intercom.ReplyToFinResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Send a follow-up message in an existing conversation. When Fin needs more information to
complete an action, it sets the conversation to `awaiting_user_reply` — send the user's
response so Fin can continue.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.finAgent.replyToFin({
    conversation_id: "ext-123",
    message: {
        author: "user",
        body: "Here's the information you requested.",
        timestamp: "2025-01-24T09:01:00Z"
    },
    user: {
        id: "123456",
        name: "John Doe",
        email: "john.doe@example.com"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.ReplyToFinRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FinAgentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.finAgent.<a href="/src/api/resources/preview/resources/finAgent/client/Client.ts">runFinProcedure</a>({ ...params }) -> Intercom.RunFinProcedureResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deterministically run a specific procedure on a new conversation. Calling this endpoint
guarantees that the named procedure runs — there is no non-deterministic routing.

Fin's progress is delivered asynchronously via events or Server-Sent Events. If the
procedure pauses for user input, the conversation status becomes `awaiting_user_reply` —
send the user's response with [`/fin/reply`](/docs/references/preview/rest-api/api.intercom.io/fin-agent/replytofin).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.finAgent.runFinProcedure({
    procedure_id: "12345",
    conversation_id: "ext-123",
    user: {
        id: "123456",
        name: "John Doe",
        email: "john.doe@example.com"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.RunFinProcedureRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FinAgentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.finAgent.<a href="/src/api/resources/preview/resources/finAgent/client/Client.ts">escalateFinConversation</a>({ ...params }) -> Intercom.EscalateFinConversationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Hand a conversation off to a human teammate. If you use the Intercom Helpdesk, the
handoff lands in your team inbox.

Provide either `conversation_id` or `user`:

- `conversation_id` — escalate an existing agent conversation, including one started
  with `/fin/ask`. On the Intercom Helpdesk, Fin by default summarises the conversation
  and opens a new Helpdesk conversation that carries the summary as an internal note.
  Escalation does not change the original agent conversation's assignment or open/closed
  state. Configure an escalation Operator Workflow to change this default.
- `user` — escalate on behalf of a user with no prior agent conversation. On the Intercom
  Helpdesk, a new Helpdesk conversation is created for the teammate. Not supported on Fin
  for Platforms — see below.

In both cases, pass the optional `context` to give the receiving teammate background your
orchestrating agent has and Fin does not. On the Intercom Helpdesk, it appears above the
summary in the internal note of the new conversation the teammate picks up. It is never
shown to the end user.

Escalating an existing conversation also sets its AI Agent resolution state to
`escalated`, readable as `ai_agent.resolution_state` on the Conversations API. This is a
resolution state, not a billable resolution.

On Fin for Platforms, `conversation_id` is required — `user` is not supported and is
rejected, because there is no Intercom Helpdesk in which to create a conversation. There
is no Intercom inbox either, so an escalation that no workflow handles does not open a
Helpdesk conversation for a teammate. `context` is not surfaced, and the conversation is
left open for your platform to hand off and continue driving.

You are notified over the existing webhook or SSE channel with an `escalated` status
followed by `complete`. The `complete` status signals that Fin is done; it does not close
the conversation. On the Intercom Helpdesk, the new human conversation remains open; on
Fin for Platforms, the conversation remains open for whoever handles it on your platform.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.finAgent.escalateFinConversation({
    "conversation_id": "ext-123",
    "context": "Customer is requesting a refund and is frustrated."
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `unknown` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FinAgentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.finAgent.<a href="/src/api/resources/preview/resources/finAgent/client/Client.ts">submitFinCsat</a>({ ...params }) -> Intercom.SubmitFinCsatResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Record a customer's satisfaction rating for a conversation, with an optional free-text
remark.

Fin decides *when* to ask for a rating — this reuses the CSAT settings on your Fin
workflow, not this API. When Fin asks, it fires a `csat_requested` event over webhooks or
SSE carrying the rating options to show the user. Present those options, then submit the
user's choice here.

Submitting the same rating again, with no new remark, is a no-op and stays successful,
so an at-least-once client can safely retry. Submitting a *different* rating updates the
stored rating while the update window is still open, and a first remark can be added to
an already-rated survey. Once a remark has been recorded the rating is locked and can no
longer be changed.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.finAgent.submitFinCsat({
    conversation_id: "ext-123",
    rating: "amazing"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.SubmitFinCsatRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FinAgentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.preview.finAgent.<a href="/src/api/resources/preview/resources/finAgent/client/Client.ts">startFinConversation</a>({ ...params }) -> Intercom.StartFinConversationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

{% admonition type="info" name="Legacy — conversational mode" %}
`/fin/start` powers the conversational model, where your own UI drives a back-and-forth with Fin. This endpoint is no longer actively developed and is maintained only for existing integrations — new functionality lands on the orchestration endpoints.
{% /admonition %}

Initialize Fin by passing it the user's message along with conversation history and user details.

These additional pieces of context will be used by Fin to provide a better and more contextual answer to the user.

Once Fin is initialized, it progresses through a series of statuses such as *thinking*, *replying*, *awaiting_user_reply*, or *resolved* before ending with a status of *complete*.

During this workflow, the client should allow Fin to continue uninterrupted until a final *complete* status is returned, at which point control of the conversation passes back to the client.

Events can be received via webhooks or Server-Sent Events (SSE) using the `sse_subscription_url` in the response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.finAgent.startFinConversation({
    conversation_id: "ext-123",
    message: {
        author: "user",
        body: "How can I see my account details?",
        timestamp: "2025-01-24T10:01:20Z"
    },
    user: {
        id: "123456",
        name: "John Doe",
        email: "john.doe@example.com"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.StartFinConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FinAgentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Procedures
<details><summary><code>client.preview.procedures.<a href="/src/api/resources/preview/resources/procedures/client/Client.ts">collectProcedureAgentInput</a>({ ...params }) -> Record<string, unknown></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Submit human-collected input to a Fin Procedure that is paused at a Human in the Loop (HITL) step.

When a procedure reaches a HITL step with the API channel enabled, Intercom sends a `procedure.hitl_notification.created` webhook. Use the `callback_url` from that webhook payload to call this endpoint with the collected attribute values.

The `step_id` must match the one from the webhook payload, and `attribute_values` must include a value for every attribute listed in `attributes_to_collect`.

{% admonition type="info" name="Authentication" %}
This endpoint requires an OAuth token with the `write_conversations` scope. The admin associated with the token must have access to the conversation.
{% /admonition %}

{% admonition type="warning" name="Feature access" %}
This endpoint requires the Procedures HITL API feature to be enabled for your workspace.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.preview.procedures.collectProcedureAgentInput({
    conversation_id: "215473853299345",
    step_id: "d5b81f72-adb9-4317-b973-75b3c3624c09",
    attribute_values: [{
            identifier: "workflow_local_variables.72c5a6b3-3cce-41d8-8e30-14da40791958",
            value: true
        }, {
            identifier: "workflow_local_variables.5adb55fb-f549-44a0-8ee9-7e652ad77c25",
            value: "85f00ba7-558c-4b02-a397-6f5c3659941c"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.preview.CollectAgentInputRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProceduresClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## TicketTypes Attributes
<details><summary><code>client.ticketTypes.attributes.<a href="/src/api/resources/ticketTypes/resources/attributes/client/Client.ts">create</a>({ ...params }) -> Intercom.TicketTypeAttribute | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new attribute for a ticket type.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketTypes.attributes.create({
    ticket_type_id: "ticket_type_id",
    name: "Attribute Title",
    description: "Attribute Description",
    data_type: "string",
    required_to_create: false
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ticketTypes.CreateTicketTypeAttributeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AttributesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketTypes.attributes.<a href="/src/api/resources/ticketTypes/resources/attributes/client/Client.ts">update</a>({ ...params }) -> Intercom.TicketTypeAttribute | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update an existing attribute for a ticket type.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketTypes.attributes.update({
    ticket_type_id: "ticket_type_id",
    attribute_id: "attribute_id",
    description: "New Attribute Description"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ticketTypes.UpdateTicketTypeAttributeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AttributesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>
